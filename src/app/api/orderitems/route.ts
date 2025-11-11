import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextResponse } from "next/server";
import { connect } from "@/db/dbConfig";
import Order from "@/models/orders.model";
import Cart from "@/models/cart.models";

await connect();

// Define shared type for items in cart and order
 type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export async function POST(req: Request) {
  try {
    // ✅ Step 1: Authenticate user
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ✅ Step 2: Parse body
    const body = await req.json();
    const { shippingAddress, paymentMethod } = body as {
      shippingAddress: string;
      paymentMethod: string;
    };

    if (!shippingAddress || !paymentMethod) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Step 3: Fetch cart
    const cart = await Cart.findOne({ userId: session.user.email });
    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
    }

    // ✅ Step 4: Calculate totals safely
    const subtotal = cart.items.reduce((sum: number, item: CartItem) => {
      return sum + item.price * item.quantity;
    }, 0);

    const shippingCost = subtotal > 100 ? 0 : 50;
    const tax = subtotal * 0.1;
    const total = subtotal + shippingCost + tax;

    // ✅ Step 5: Create new order
    const newOrder = await Order.create({
      userId: session.user.email,
      items: cart.items.map((item: CartItem) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),
      shippingAddress,
      paymentMethod,
      total,
      shippingCost,
      taxAmount: tax,
      status: "Delivered",
    });

    // ✅ Step 6: Clear cart
    cart.items = [];
    await cart.save();

    // ✅ Step 7: Return response
    return NextResponse.json(
      { message: "Order placed successfully", order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Order creation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

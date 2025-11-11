import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connect } from "@/db/dbConfig";
import Cart from "@/models/cart.models";

// Define a shared CartItem type
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

await connect();

// GET – fetch cart for logged-in user
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cart = await Cart.findOne({ userId: session.user.email });
  return NextResponse.json(cart || { items: [] });
}

// POST – add item to cart
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: CartItem = await req.json();
  let cart = await Cart.findOne({ userId: session.user.email });

  if (!cart) {
    // Create a new cart if none exists
    cart = new Cart({
      userId: session.user.email,
      items: [{ ...body, quantity: 1 }],
    });
  } else {
    // Check if item already exists
    const existingItem = cart.items.find(
      (item: CartItem) => item.id === body.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ ...body, quantity: 1 });
    }
  }

  await cart.save();
  return NextResponse.json(cart);
}

// DELETE – remove all items from the user's cart
export async function DELETE() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cart = await Cart.findOne({ userId: session.user.email });
  if (!cart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }

  cart.items = [];
  await cart.save();

  console.log("🗑️ Deleted all items from cart");
  return NextResponse.json({
    message: "All items deleted from cart",
    items: [],
  });
}

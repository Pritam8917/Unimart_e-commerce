import { NextResponse } from "next/server";
import Cart from "@/models/cart.models";
import { connect } from "@/db/dbConfig";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Define type for cart item
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// Helper to get dynamic route id
function getIdFromUrl(req: Request) {
  const url = new URL(req.url);
  const parts = url.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1]; // last segment = id
}

// DELETE handler — remove item from cart
export async function DELETE(req: Request) {
  await connect();
  const id = Number(getIdFromUrl(req));
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cart = await Cart.findOne({ userId: session.user.email });

  if (cart) {
    cart.items = cart.items.filter((item: CartItem) => item.id !== id);
    await cart.save();
  }

  return NextResponse.json({ items: cart?.items || [] });
}

// PUT handler — update item quantity
export async function PUT(req: Request) {
  await connect();
  const id = Number(getIdFromUrl(req));
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { delta }: { delta: number } = await req.json();

  const cart = await Cart.findOne({ userId: session.user.email });

  if (cart) {
    const item = cart.items.find((i: CartItem) => i.id === id);
    if (item) {
      item.quantity = Math.max(1, item.quantity + delta);
    }
    await cart.save();
  }

  return NextResponse.json({ items: cart?.items || [] });
}

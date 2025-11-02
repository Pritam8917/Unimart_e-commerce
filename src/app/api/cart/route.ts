import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connect } from "@/db/dbConfig";
import Cart from "@/models/cart.models";

connect();

export async function GET() {

  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cart = await Cart.findOne({ userId: session.user.email });
  return NextResponse.json(cart || { items: [] });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  let cart = await Cart.findOne({ userId: session.user.email });

  if (!cart) {
    cart = new Cart({ userId: session.user.email, items: [body] });
  } else {
    const existing = cart.items.find((i:any) => i.id === body.id);// for existing item
    if (existing) existing.quantity += 1;

    else cart.items.push({ ...body, quantity: 1 }); // for new item
  }

  await cart.save();
  return NextResponse.json(cart);
}

// DELETE - remove item
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const cart = await Cart.findOne({ userId: session.user.email });
  if (!cart)
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });

  cart.items = [];
  await cart.save();

  console.log("Deleted all items from cart");
  return NextResponse.json({message:"All items deleted from cart",items:[]});
}

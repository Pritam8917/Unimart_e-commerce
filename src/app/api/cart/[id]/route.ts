
import { NextResponse } from "next/server";
import Cart from "@/models/cart.models";
import { connect } from "@/db/dbConfig";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE( req: Request,{ params }: { params: { id: string } }) {
  await connect();
  const id = Number(params.id);
  const session = await getServerSession(authOptions);
  const cart = await Cart.findOne({ userId: session?.user?.email });
  if (cart) {
    cart.items = cart.items.filter((item: any) => item.id !== id);
    await cart.save();
  }

  return NextResponse.json({ items: cart.items });
}

export async function PUT( req: Request, { params }: { params: { id: string } }) 
 {
  const session = await getServerSession(authOptions);
  await connect();
  const id = Number(params.id);
  const { delta } = await req.json();
  const cart = await Cart.findOne({ userId: session?.user?.email });

  if (cart) {
    const item = cart.items.find((i: any) => i.id === id);
    if (item) item.quantity = Math.max(1, item.quantity + delta);
    await cart.save();
  }

  return NextResponse.json({ items: cart.items });
}

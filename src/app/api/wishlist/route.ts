import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { connect } from "@/db/dbConfig";
import Wishlist from "@/models/wishlist.models";

await connect(); // ✅ ensure DB connected before route logic

// ✅ Define an interface for wishlist items
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  [key: string]: unknown; // for any extra optional fields
}

// ✅ GET - get user's wishlist
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const wishlist = await Wishlist.findOne({ userId: session.user.email });
  return NextResponse.json(wishlist || { items: [] });
}

// ✅ POST - add item to wishlist
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body: WishlistItem = await req.json();
  let wishlist = await Wishlist.findOne({ userId: session.user.email });

  if (!wishlist) {
    wishlist = new Wishlist({ userId: session.user.email, items: [body] });
  } else {
    const exists = wishlist.items.some(
      (i: WishlistItem) => i.id === body.id
    );
    if (!exists) wishlist.items.push(body);
  }

  await wishlist.save();
  return NextResponse.json(wishlist);
}

// ✅ DELETE - remove item
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id }: { id: string } = await req.json();
  const wishlist = await Wishlist.findOne({ userId: session.user.email });

  if (!wishlist)
    return NextResponse.json({ error: "Wishlist not found" }, { status: 404 });

  wishlist.items = wishlist.items.filter(
    (i: WishlistItem) => i.id !== id
  );
  await wishlist.save();

  return NextResponse.json(wishlist);
}

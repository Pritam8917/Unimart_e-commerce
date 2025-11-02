import mongoose, { Schema, Document } from "mongoose";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface WishlistDocument extends Document {
  userId: string;
  items: WishlistItem[];
}

const WishlistSchema = new Schema<WishlistDocument>({
  userId: { type: String, required: true, unique: true },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      image: String,
      rating: Number,
    },
  ],
});
const Wishlist = mongoose.models.Wishlist || mongoose.model<WishlistDocument>("Wishlist", WishlistSchema);
export default Wishlist;

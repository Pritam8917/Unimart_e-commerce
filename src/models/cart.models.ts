import mongoose, { Schema, Document } from "mongoose";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDocument extends Document {
  userId: string;
  items: CartItem[];
}

const CartSchema = new Schema<CartDocument>({
  userId: { type: String, required: true, unique: true },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
});

export default mongoose.models.Cart || mongoose.model<CartDocument>("Cart", CartSchema);

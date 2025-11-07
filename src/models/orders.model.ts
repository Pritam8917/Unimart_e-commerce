import mongoose, { Schema, Document } from "mongoose";

interface OrderItem {
  productId: string;
  name: string;        // 🟢 Store product name at purchase time (for historical accuracy)
  quantity: number;
  price: number;
  image: string;
}

interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
  cardName: string;
  cardNumber: Number;
 cardExpiryDate: string;
}

interface PaymentResult {
  id: string;          // 🟢 Payment gateway transaction ID
  status: string;      // e.g. "Paid", "Pending", "Failed"
  method: string;      // e.g. "Credit Card", "UPI", "PayPal"
  email?: string;      // Email from payment gateway (optional)
}

interface Order extends Document {
  userId: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult?: PaymentResult;
  total: number;
  shippingCost: number;
  taxAmount: number;
  status: string;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<Order>(
  {
    userId: { type: String, required: true },

    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
      },
    ],

    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
      cardName: {type: String, required: true},
      cardNumber: {type: Number, required: true},
      cardExpiryDate : {type: String, required: true},
    },

    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      method: { type: String },
      email: { type: String },
    },

    total: { type: Number, required: true },
    shippingCost: { type: Number, default: 0 },
    taxAmount: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["Pending", "Paid", "Shipped", "Delivered", "Cancelled"],
      default: "Delivered",
    },

    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

const Order =
  mongoose.models.OrderItem || mongoose.model<Order>("OrderItem", OrderSchema);
export default Order;

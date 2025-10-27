"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/app/CartContext/page";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-18 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link href="/">
              <Button className="bg-[#08A0AA] text-white">Continue Shopping</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <p className="text-[#20A9B2] font-bold">${item.price}</p>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-[#FF6E42] hover:text-white"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4 " />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-[#FF6E42] hover:text-white"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4 " />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                         onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:bg-[#FF6E42] hover:text-white"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">${shipping}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-[#20A9B2]">${total}</span>
                  </div>
                </div>

                <Button className="w-full mb-2 bg-[#08A0AA] text-white hover:bg-[#20A9B2]">
                  Proceed to Checkout
                </Button>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-[#FF6E42] hover:text-white"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;

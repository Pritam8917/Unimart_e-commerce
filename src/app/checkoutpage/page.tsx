"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext/page";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [expiryDate, setExpiryDate] = useState<Date>();
  const router = useRouter();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 50;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const { data: session } = useSession();
  const user = session?.user;
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //Collect form data
      const form = e.target as HTMLFormElement;
      const shippingAddress = {
        fullName: `${form.firstName.value} ${form.lastName.value}`,
        address: form.address.value,
        city: form.city.value,
        state: form.state.value,
        pincode: form.pin.value,
        country: "India",
        phone: form.phone.value,
        cardName: form.cardname.value,
        cardNumber: form.cardnumber.value,
        cardExpiryDate: expiryDate ? format(expiryDate, "MM/yy") : "",
      };
      const paymentMethod = "Card";

      // POST request
      const res = await axios.post("/api/orderitems", {
        shippingAddress,
        paymentMethod,
      });
      console.log("order placed successfully");
      toast.success(res.data.message);
      clearCart();
      router.push("/ProfilePage");
   } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Order placement failed:", error.message);
  } else {
    console.error("Unknown error during order placement:", error);
  }

  toast.error("Failed to place order, please try again");
} finally {
  setIsLoading(false);
}

  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-17 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center lg:text-left">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* --- Left Section: Shipping & Payment --- */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Shipping Info */}
              <Card className="py-4 shadow-sm border border-gray-200">
                <CardHeader className="py-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800 pb-3">
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-7">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        defaultValue={user?.email ?? undefined}
                        disabled
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" required />
                    </div>
                    <div className="space-y-1.5 pb-3">
                      <Label htmlFor="pin">Pin Code</Label>
                      <Input id="pin" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Info */}
              <Card className="py-4 shadow-sm border border-gray-200">
                <CardHeader className="py-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800 pb-3">
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-7">
                  <div className="space-y-1.5">
                    <Label htmlFor="cardname">Name on Card</Label>
                    <Input id="cardname" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cardnumber">Card Number</Label>
                    <Input
                      id="cardnumber"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="cardexpirydate">Expiry Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !expiryDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {expiryDate ? (
                              format(expiryDate, "MM/yy")
                            ) : (
                              <span>Pick expiry date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={expiryDate}
                            onSelect={setExpiryDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-1.5 pb-3">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-[#08A0AA] hover:bg-[#20A9B2] text-white py-6 text-lg font-medium transition-all duration-200 cursor-pointer"
              >
                {isLoading ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </div>

          {/* --- Right Section: Order Summary --- */}
          <div>
            <Card className="sticky top-24 shadow-md border border-gray-200 py-5">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm text-gray-700"
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;

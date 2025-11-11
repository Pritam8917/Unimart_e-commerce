"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { User, Package, MapPin, CreditCard, LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  date: string;
  status: string;
  total: number;
  taxAmount: number;
  shippingCost: number;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    phone: string;
    cardName: string;
    cardNumber: number;
   cardExpiryDate: string;
  };
  items: OrderItem[];
}

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  // 1️⃣ Controlled form state

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 2️⃣ Orders

 const [orders, setOrders] = useState<Order[]>([]);
const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);


  useEffect(() => {
    const fetchUserAndOrders = async () => {
      try {
        if (user) {
          const [first, last] = (user?.name ?? "").split(" ");
          let phoneFromOrder = "";
          const res = await axios.get("/api/order");
          const fetchedOrders = res.data.orders || [];
          if (fetchedOrders.length > 0) {
            phoneFromOrder = fetchedOrders[0].shippingAddress?.phone || "";
          }
          setOrders(fetchedOrders);
          setFormData({
            firstName: first || "",
            lastName: last || "",
            email: user.email || "",
            phone: phoneFromOrder || "",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching orders:", error.message);
        } else {
          console.error("Unknown error fetching orders:", error);
        }
      }
    };

    fetchUserAndOrders();
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-15 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Account</h1>
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/auth/LoginPage" })}
            className="flex items-center gap-2 text-white bg-[#20A9B2] hover:bg-[#08A0AA] hover:text-white cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* TABS */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="profile"
              className="flex items-center gap-2 cursor-pointer"
            >
              <User className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Package className="h-4 w-4" /> Orders
            </TabsTrigger>
            <TabsTrigger
              value="addresses"
              className="flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="h-4 w-4" /> Addresses
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="flex items-center gap-2 cursor-pointer"
            >
              <CreditCard className="h-4 w-4" /> Payment
            </TabsTrigger>
          </TabsList>

          {/* ---------- PROFILE ---------- */}
          <TabsContent value="profile">
            {!user ? (
              <Card className="p-6 text-center text-muted-foreground">
                <p>Loading Profile......</p>
              </Card>
            ) : (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  Personal Information
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* <Button className="bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer">
                    Save Changes
                  </Button> */}
                </form>
              </Card>
            )}
          </TabsContent>

          {/* ---------- ORDERS ---------- */}
          <TabsContent value="orders">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                {orders.length === 0 ? (
                  <p className="text-muted-foreground">No orders found.</p>
                ) : (
                  orders.map((order) => (
                    <Card key={order._id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">
                            Order
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {order.date}
                          </p>
                          <p className="text-sm mt-2">
                            {order.items?.length || 0}{" "}
                            {order.items?.length === 1 ? "item" : "items"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#08A0AA]">
                            ₹{order.total}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {order.status}
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                            onClick={() => setSelectedOrder(order)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </Card>
          </TabsContent>

          {/* ---------- ADDRESSES ---------- */}
          <TabsContent value="addresses">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Saved Address</h2>
              <div className="space-y-4">
                {/* Check if orders exist and show first one */}
                {orders.length > 0 ? (
                  <Card className="p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">Home</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {orders[0].shippingAddress.address}
                          <br />
                          {orders[0].shippingAddress.city},{" "}
                          {orders[0].shippingAddress.state}
                        </p>
                      </div>
                      {/* <div className="space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                        >
                          Delete
                        </Button>
                      </div> */}
                    </div>
                  </Card>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No address found.
                  </p>
                )}

                {/* <Button
                  variant="outline"
                  className="hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                >
                  + Add New Address
                </Button> */}
              </div>
            </Card>
          </TabsContent>

          {/* ---------- PAYMENT ---------- */}
          <TabsContent value="payment">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
              <div className="space-y-4">
                {orders.length > 0 ? (
                  <Card className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">
                          {orders[0].shippingAddress.cardNumber}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {orders[0].shippingAddress.cardExpiryDate}
                        </p>
                      </div>
                      {/* <div className="space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                        >
                          Delete
                        </Button>
                      </div> */}
                    </div>
                  </Card>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No saved payments found.
                  </p>
                )}
                {/* <Button
                  variant="outline"
                  className="hover:text-white hover:bg-[#FF6E42] cursor-pointer"
                >
                  + Add New Card
                </Button> */}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* ---------- ORDER DETAILS DIALOG ---------- */}
      <Dialog
        open={!!selectedOrder}
        onOpenChange={() => setSelectedOrder(null)}
      >
        <DialogContent className="max-w-5xl p-6">
          <DialogHeader>
            <DialogTitle>
              Order Details - {selectedOrder?._id}
            </DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Order Date</p>
                  <p className="font-medium">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium">{selectedOrder.status}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Products</h3>
                <div className="space-y-2">
                  {selectedOrder.items?.map((product: OrderItem, index: number) => (
                    <div
                      key={`${product.name}-${index}`}
                      className="flex justify-between items-center p-3 bg-muted rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">₹{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-muted-foreground">
                  {selectedOrder.shippingAddress?.address},{" "}
                  {selectedOrder.shippingAddress?.city},{" "}
                  {selectedOrder.shippingAddress?.state}
                </p>
              </div>

              <div className="pt-4 border-t mt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>
                      ₹
                      {selectedOrder.total -
                        (selectedOrder.taxAmount + selectedOrder.shippingCost)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>GST</span>
                    <span>₹{selectedOrder.taxAmount}</span>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>
                      {selectedOrder.total -
                        (selectedOrder.taxAmount + selectedOrder.shippingCost) >
                      100
                        ? "Free"
                        : `₹${selectedOrder.shippingCost}`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t mt-3">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-2xl text-[#08A0AA]">
                      ₹{selectedOrder.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ProfilePage;

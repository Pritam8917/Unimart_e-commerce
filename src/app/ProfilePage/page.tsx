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
import { User, Package, MapPin, CreditCard } from "lucide-react";

const ProfilePage = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-10-15",
      status: "Delivered",
      total: 599,
      items: 2,
    },
    {
      id: "ORD-002",
      date: "2024-10-18",
      status: "In Transit",
      total: 299,
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-18 py-8">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className=" space-y-1.5">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className=" space-y-1.5">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className=" space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />
                </div>

                <div className=" space-y-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                </div>

                <Button className="bg-[#08A0AA] text-white hover:bg-[#20A9B2]">
                  Save Changes
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Order {order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.date}
                        </p>
                        <p className="text-sm mt-2">{order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#08A0AA]">
                          ${order.total}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {order.status}
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2 hover:text-white hover:bg-[#FF6E42]"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="addresses">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Home</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        123 Main St
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:text-white hover:bg-[#FF6E42]"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:text-white hover:bg-[#FF6E42]"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
                <Button
                  variant="outline"
                  className="hover:text-white hover:bg-[#FF6E42]"
                >
                  + Add New Address
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 12/25
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:text-white hover:bg-[#FF6E42]"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:text-white hover:bg-[#FF6E42]"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
                <Button
                  variant="outline"
                  className="hover:text-white hover:bg-[#FF6E42]"
                >
                  + Add New Card
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;

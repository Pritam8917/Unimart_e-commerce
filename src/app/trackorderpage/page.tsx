import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Package } from "lucide-react";

const TrackOrderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <Package className="w-16 h-16 mx-auto mb-4 text-[#08A0AA]" />
          <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
          <p className="text-muted-foreground">
            Enter your order number to track your package
          </p>
        </div>
        
        <div className="bg-muted p-8 rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Order Number</label>
              <Input placeholder="e.g., SH123456789" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            <Button className="w-full bg-[#08A0AA] hover:bg-[#06A0AA] text-white cursor-pointer">Track Order</Button>
          </form>
          
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              You can find your order number in the confirmation email we sent you after your purchase.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackOrderPage;

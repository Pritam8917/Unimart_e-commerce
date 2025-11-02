import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Options</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Standard Shipping (5-7 business days)</h3>
                <p className="text-muted-foreground">Free on orders over ₹100</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Express Shipping (2-3 business days)</h3>
                <p className="text-muted-foreground">₹15.99</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Next Day Delivery</h3>
                <p className="text-muted-foreground">₹29.99</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
            <p className="text-muted-foreground">
              We ship to most countries worldwide. International shipping times vary by destination and typically take 10-21 business days.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShippingPage;

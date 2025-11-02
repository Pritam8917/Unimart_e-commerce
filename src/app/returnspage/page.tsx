import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Returns & Refunds</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="text-muted-foreground mb-4">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 15 days of delivery for a full refund.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Items must be unused and in original packaging</li>
              <li>Tags and labels must be attached</li>
              <li>Some items may be non-returnable (final sale items)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Return an Item</h2>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Contact our customer service team</li>
              <li>Receive your return authorization and shipping label</li>
              <li>Pack the item securely in original packaging</li>
              <li>Ship the package using the provided label</li>
              <li>Receive your refund within 5-7 business days after we receive your return</li>
            </ol>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="text-muted-foreground">
              Once we receive your return, we'll inspect the item and process your refund within 5-7 business days. The refund will be issued to your original payment method.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReturnsPage;
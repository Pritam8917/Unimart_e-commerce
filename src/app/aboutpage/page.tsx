import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />
      
      <div className="container mx-auto px-15 py-16">
        <h1 className="text-4xl font-bold mb-8">About UniMart</h1>
        
        <div className="prose max-w-3xl">
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to UniMart, your one-stop destination for quality products at amazing prices.
            We're committed to providing you with the best shopping experience possible.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            To make quality products accessible to everyone while providing exceptional customer service
            and a seamless shopping experience.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Wide selection of quality products</li>
            <li>Competitive prices and regular deals</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer support</li>
            <li>Secure payment options</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
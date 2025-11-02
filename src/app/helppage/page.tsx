import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I place an order?</AccordionTrigger>
            <AccordionContent>
              Browse our products, add items to your cart, and proceed to checkout. Follow the simple steps to complete your purchase.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, debit cards, PayPal, and other secure payment methods.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I track my order?</AccordionTrigger>
            <AccordionContent>
              Yes! Once your order ships, you'll receive a tracking number via email to monitor your package.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 15-day return policy for most items. Products must be unused and in original packaging.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <Footer />
    </div>
  );
};

export default HelpPage;
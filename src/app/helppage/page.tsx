import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Navbar />
      <CategoryNav />

      {/* Hero Section */}
      <section className="text-center py-16 px-6 border-b border-gray-200">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[#08A0AA]/10 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-[#08A0AA]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          Help Center
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Find answers to common questions and learn how to make the most of your shopping experience.
        </p>
      </section>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-3 ">
          <AccordionItem
            value="item-1"
            className="border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:text-[#08A0AA] cursor-pointer">
              How do I place an order?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Browse our products, add your favorite items to your cart, and proceed to checkout.
              Follow the simple on-screen steps to complete your purchase securely.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:text-[#08A0AA] cursor-pointer">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              We accept all major credit and debit cards, UPI, PayPal, and other secure payment gateways.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:text-[#08A0AA] cursor-pointer">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Standard shipping typically takes 5–7 business days. Express options are available at checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:text-[#08A0AA] cursor-pointer">
              Can I track my order?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              Yes! Once your order ships, you’ll receive a tracking number via email to monitor your delivery in real-time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:text-[#08A0AA] cursor-pointer">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 px-6 pb-4">
              We offer a 15-day return policy for most items. Products must be unused, undamaged, and in their original packaging.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Footer />
    </div>
  );
};

export default HelpPage;

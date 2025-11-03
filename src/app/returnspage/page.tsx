import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Package, RefreshCcw, CreditCard } from "lucide-react";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Returns & Refunds
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We want you to love what you ordered. If something isn’t right, we’ll make it right.
            Learn more about our hassle-free return and refund process below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step Cards */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-[#08A0AA]/10 rounded-full mb-4 mx-auto">
                <Package className="w-7 h-7 text-[#08A0AA]" />
              </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Easy Returns
            </h3>
            <p className="text-gray-600 text-center">
              Return your item within 15 days in its original packaging — no questions asked.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-[#08A0AA]/10 rounded-full mb-4 mx-auto">
              <RefreshCcw className="w-7 h-7 text-[#08A0AA]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Quick Process
            </h3>
            <p className="text-gray-600 text-center">
              Our simple 3-step return process ensures a fast and smooth experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-[#08A0AA]/10 rounded-full mb-4 mx-auto">
              <CreditCard className="w-7 h-7 text-[#08A0AA]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Secure Refunds
            </h3>
            <p className="text-gray-600 text-center">
              Receive your refund within 5–7 business days once your item is approved.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-200">
              Return Policy
            </h2>
            <p className="text-gray-600 mb-4">
              You can return your item within <strong>15 days</strong> of delivery for a full refund.
              Please make sure the product meets these conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Items must be unused and in original packaging.</li>
              <li>Tags and labels must be attached.</li>
              <li>Some items (like final sale products) are non-returnable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-200">
              How to Return an Item
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>Contact our customer support for a return request.</li>
              <li>Receive your return authorization and prepaid shipping label.</li>
              <li>Pack your item securely in its original packaging.</li>
              <li>Drop off your package at the nearest courier center.</li>
              <li>Receive your refund once we confirm receipt of the item.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-200">
              Refund Process
            </h2>
            <p className="text-gray-600">
              Once we receive and inspect your returned item, we’ll initiate your refund within{" "}
              <strong>5–7 business days</strong>. Refunds will be credited to your original payment method.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReturnsPage;

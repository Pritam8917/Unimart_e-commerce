import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Truck, Globe2, Clock, Zap } from "lucide-react";

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Shipping Information
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about our reliable and fast shipping options to ensure your order reaches you on time.
          </p>
        </div>

        {/* SHIPPING OPTIONS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Truck className="w-6 h-6 text-[#08A0AA]" />
            Shipping Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex justify-center items-center w-14 h-14 bg-[#08A0AA]/10 rounded-full mb-4 mx-auto">
                <Clock className="w-7 h-7 text-[#08A0AA]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Standard Shipping
              </h3>
              <p className="text-gray-600 text-center mb-1">
                5–7 business days
              </p>
              <p className="text-[#08A0AA] font-medium text-center">
                Free on orders over ₹100
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex justify-center items-center w-14 h-14 bg-[#08A0AA]/10 rounded-full mb-4 mx-auto">
                <Zap className="w-7 h-7 text-[#08A0AA]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Express Shipping
              </h3>
              <p className="text-gray-600 text-center mb-1">
                2–3 business days
              </p>
              <p className="text-[#08A0AA] font-medium text-center">
                ₹15.99
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex justify-center items-center w-14 h-14 bg-[#08A0AA]/10 rounded-full mb-4 mx-auto">
                <Truck className="w-7 h-7 text-[#08A0AA]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Next Day Delivery
              </h3>
              <p className="text-gray-600 text-center mb-1">
                1 business day
              </p>
              <p className="text-[#08A0AA] font-medium text-center">
                ₹29.99
              </p>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL SHIPPING */}
        <section className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="w-6 h-6 text-[#08A0AA]" />
            <h2 className="text-2xl font-semibold text-gray-800">
              International Shipping
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            We proudly ship to most countries worldwide 🌍. Delivery times may vary depending
            on your location and customs processing times. Typically, international deliveries take
            <strong> 10–21 business days</strong>.
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li>International shipping fees are calculated at checkout.</li>
            <li>Tracking information will be provided once your order ships.</li>
            <li>Customs duties or taxes may apply depending on destination country.</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingPage;

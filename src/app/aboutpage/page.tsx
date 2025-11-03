import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <CategoryNav />

      <section className="relative py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#08A0AA] mb-4">
              About <span className="text-gray-900">Unimart</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your one-stop destination for quality, affordability, and a seamless shopping experience.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#08A0AA]">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to make high-quality products accessible to everyone while providing exceptional
              customer service and a smooth, enjoyable shopping experience.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-[#08A0AA]">
              Why Choose Unimart?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#08A0AA] font-bold mr-2">•</span>
                Wide selection of premium products
              </li>
              <li className="flex items-start">
                <span className="text-[#08A0AA] font-bold mr-2">•</span>
                Competitive prices and frequent deals
              </li>
              <li className="flex items-start">
                <span className="text-[#08A0AA] font-bold mr-2">•</span>
                Fast, reliable, and tracked shipping
              </li>
              <li className="flex items-start">
                <span className="text-[#08A0AA] font-bold mr-2">•</span>
                Dedicated customer support team
              </li>
              <li className="flex items-start">
                <span className="text-[#08A0AA] font-bold mr-2">•</span>
                Secure and hassle-free payment options
              </li>
            </ul>
          </div>

          {/* Closing Message */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Thank you for being a part of the Unimart community.  
              We’re here to make your shopping journey better, faster, and easier.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

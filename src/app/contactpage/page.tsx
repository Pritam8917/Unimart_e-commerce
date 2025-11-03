import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-6 md:px-20 py-16">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#08A0AA]">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question about our products,
            feedback, or anything else — our team is ready to assist you.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 transition-transform hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <Input
                placeholder="Your Name"
                className="border-gray-300 focus:border-[#08A0AA] focus:ring-[#08A0AA]"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="border-gray-300 focus:border-[#08A0AA] focus:ring-[#08A0AA]"
              />
              <Input
                placeholder="Subject"
                className="border-gray-300 focus:border-[#08A0AA] focus:ring-[#08A0AA]"
              />
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="border-gray-300 focus:border-[#08A0AA] focus:ring-[#08A0AA]"
              />
              <Button className="w-full bg-[#08A0AA] hover:bg-[#07acb8] text-white font-medium transition">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Have questions or need help with your order? Reach out to us anytime — our
              support team will respond as quickly as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#E6F8F9] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#08A0AA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@unimart.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E6F8F9] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#08A0AA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E6F8F9] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#08A0AA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    123 Shopping Street,
                    <br /> Bangalore, India
                  </p>
                </div>
              </div>
            </div>

            {/* Map Embed (Optional aesthetic addition) */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Unimart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.476992716895!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167a8abf4b33%3A0xb0d1f9b5a06e44a!2sBangalore!5e0!3m2!1sen!2sin!4v1664200830875!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;

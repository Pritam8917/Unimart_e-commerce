import { ShoppingCart } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border text-muted-foreground">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#08A0AA] rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">UniMart</span>
            </div>
            <p className="text-sm mb-4">
              Your one-stop shop for quality products at amazing prices. Fast
              shipping and easy returns.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/aboutpage"
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactpage"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blogpage"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/helppage"
                  className="hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/shippingpage"
                  className="hover:text-foreground transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returnspage"
                  className="hover:text-foreground transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/trackorderpage"
                  className="hover:text-foreground transition-colors"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest deals and offers.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md border border-border focus:outline-none focus:ring-2 focus:ring-[#08A0AA]"
              />
              <button
                type="submit"
                className="bg-[#08A0AA] text-white px-4 py-2 rounded-r-md hover:bg-[#069098] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-7 mt-10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} UniMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

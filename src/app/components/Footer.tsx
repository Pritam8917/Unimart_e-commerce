import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-15 py-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#08A0AA] rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">UniMart</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for quality products at amazing prices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/aboutpage" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contactpage" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/blogpage" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/helppage" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link href="/shippingpage" className="hover:text-foreground transition-colors">Shipping Info</Link></li>
              <li><Link href="/returnspage" className="hover:text-foreground transition-colors">Returns</Link></li>
              <li><Link href="/trackorderpage" className="hover:text-foreground transition-colors">Track Order</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 p-7 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
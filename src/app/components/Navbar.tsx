"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/CartContext/page";

const Navbar = () => {
  const Router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      Router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border px-15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-17 gap-4 text-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-fit cursor-pointer">
            <div className="w-9 h-9 bg-[#08A0AA] rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">ShopHub</span>
          </Link>

          {/* Location */}
          <button className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors min-w-fit">
            <MapPin className="w-4 h-4" />
            <div className="text-left">
              <p className="text-md">Deliver to</p>
              <p className="font-semibold text-foreground">New York 10001</p>
            </div>
          </button>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e:any) => setSearchQuery(e.target.value)}
                className="w-full pr-10 border-input"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3"
              >
                <Search className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 min-w-fit">
            <Link href="/LoginPage">
              <Button variant="ghost" size="sm" className="hidden md:flex p-4 hover:bg-[#FF6E42] hover:text-white transition-colors text-md justify-center items-center cursor-pointer">
                {/* <User className="w-5 h-5 mr-2" /> */}
                Login
              </Button>
            </Link>

            <Link href="/CartPage">
              <Button variant="ghost" size="icon" className="relative hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer">
                <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6E42] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Link href="/ProfilePage">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer">
                <User className="w-5 h-5 " />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

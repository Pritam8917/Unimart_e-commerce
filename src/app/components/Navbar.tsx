"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Search, ShoppingCart, User, Heart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext/page";
import { useWishlist } from "@/contexts/wishlistcontext/page";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/searchpage?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm px-4 sm:px-6 md:px-10 lg:px-13">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-sm sm:text-md">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 min-w-fit cursor-pointer"
          >
            <div className="w-40 h-10 flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/logo.png"
                alt="UniMart Logo"
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Location */}
          <button className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors min-w-fit">
            <MapPin className="w-4 h-4" />
            <div className="text-left">
              <p className="text-md">Deliver to</p>
              <p className="font-semibold text-foreground">Kirba, Sambalpur, 768061</p>
            </div>
          </button>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e:  React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full pr-10 border-input text-sm sm:text-base"
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

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 min-w-fit">
            {/* Profile */}
            <Link href="/ProfilePage" className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="icon"
                className=" md:flex hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer "
              >
                <User className="w-8 h-8 sm:w-10 sm:h-10" />
              </Button>
              <span className="md:block text-xs  font-medium">Profile</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlistpage"
              className="flex flex-col items-center relative"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer "
              >
                <Heart className="w-8 h-8 sm:w-10 sm:h-10" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6E42] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </Button>
              <span className="text-xs  font-medium ">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link
              href="/CartPage"
              className="flex flex-col items-center relative"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer "
              >
                <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6E42] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
              <span className="text-xs  font-medium">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

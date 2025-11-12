"use client";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { useWishlist } from "@/contexts/wishlistcontext/page";
import { useCart } from "@/contexts/CartContext/page";
import { toast } from "sonner";
import CategoryNav from "@/app/components/CategoryNav";
import Image from "next/image";
import { useRouter } from "next/navigation";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, cartItems } = useCart();
  const router = useRouter();

  const handleRemove = (id: number) => {
    removeFromWishlist(id);
    toast.success("Removed from wishlist", {
      description: "Item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast.success("Added to cart", {
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleGoToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/CartPage");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryNav />
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            My Wishlist
          </h1>
          <p className="text-muted-foreground">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Save items you love for later!
            </p>
            <Link href="/">
              <Button className="bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item: WishlistItem) => {
              const isInCart = cartItems?.some(
                (cartItem: CartItem) => cartItem.id === item.id
              );

              return (
                <Card
                  key={item.id}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <Link href={`/productdetails/${item.id}`}>
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </Link>

                  <CardContent className="p-4">
                    <Link href={`/productdetails/${item.id}`}>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < item.rating
                              ? "text-[#FF6E42]"
                              : "text-muted-foreground"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({item.rating}.0)
                      </span>
                    </div>

                    <div className="text-xl font-bold text-[#08A0AA] mb-4">
                      ₹{item.price}
                    </div>

                    <div className="flex gap-2">
                      {isInCart ? (
                        <Button
                          size="lg"
                          className="flex-1 bg-[#FF6E42] text-white hover:bg-[#ff814f] cursor-pointer"
                          onClick={handleGoToCart}
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Go to Cart
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          className="flex-1 bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer"
                          onClick={() => handleAddToCart(item)}
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Add to Cart
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleRemove(item.id)}
                        className="cursor-pointer bg-white hover:bg-gray-100 transition-colors"
                      >
                        <Heart className="w-4 h-4 stroke-[#FF6E42] fill-[#FF6E42] hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;

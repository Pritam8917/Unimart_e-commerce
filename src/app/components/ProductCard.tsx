"use client";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { useCart } from "@/app/CartContext/page";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/app/wishlistcontext/page";

interface ProductCardProps {
  id?: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
}: ProductCardProps) => {

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const router = useRouter();
  const productId = id || Date.now();
  const isLiked = isInWishlist(productId);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: productId,
      name,
      price,
      image,
    });
    toast.success("Added to cart", {
      description: `${name} has been added to your cart.`,
    });
  };
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      removeFromWishlist(productId);
      toast.success("Removed from wishlist", {
        description: `${name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: productId,
        name,
        price,
        image,
        rating,
      });
      toast.success("Added to wishlist", {
        description: `${name} has been added to your wishlist.`,
      });
    }
  };
  const handleCardClick = () => {
    if (id) {
      router.push(`/productdetails/${id}`);
    }
  };

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-(--card-shadow-hover) border border-border"
    >
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          onClick={handleCardClick}
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-[#2DA2A4] hover:bg-[#32bac4] text-white hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
           onClick={handleToggleWishlist}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${
                i < rating ? "text-[#FF6E42]" : "text-green-900"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({rating}.0)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#2DA2A4]">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-[#2DA2A4] hover:bg-[#32bac4] text-white cursor-pointer"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

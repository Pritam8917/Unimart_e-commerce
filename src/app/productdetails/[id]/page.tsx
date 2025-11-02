"use client";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { useCart } from "@/app/CartContext/page";
import { toast } from "sonner";
import { getProductById } from "@/app/data/products";
import { useWishlist } from "@/app/wishlistcontext/page";

const ProductDetailPage = () => {
  const { id } = useParams(); // ✅ keep only once
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const product = getProductById(Number(id));
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <CategoryNav />
        <div className="container mx-auto px-15 py-8">
          <p className="text-center text-foreground">Product not found.</p>
          <div className="flex justify-center mt-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go back
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success("Added to cart", {
      description: `${product?.name} has been added to your cart.`,
    });
  };

  const isLiked = isInWishlist(product.id);
  const handleToggleWishlist = (e: React.MouseEvent) => {
    if (isLiked) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist", {
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        rating: product.rating,
      });
      toast.success("Added to wishlist", {
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-15 py-8">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 hover:bg-[#FF6E42] hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center w-full max-w-md mx-auto  rounded-lg overflow-hidden ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-h-[500px] object-fit rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating
                        ? "fill-[#FF6E42] text-[#FF6E42]"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-[#08A0AA]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-[#65758B] line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-lg text-[#FF6E42] font-semibold">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-3 mb-8">
              <Button
                size="lg"
                className="flex-1  bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2 " />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-[#FF6E42] hover:text-white cursor-pointer"
                onClick={handleToggleWishlist}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isLiked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-[#FF6E42]" />
                <span className="text-muted-foreground">
                  Free shipping on orders over $50
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="w-5 h-5 text-[#FF6E42]" />
                <span className="text-muted-foreground">
                  15-day return policy
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-[#FF6E42]" />
                <span className="text-muted-foreground">
                  1-year warranty included
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {product.features && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <Separator className="mb-4" />
              <ul className="grid md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#FF6E42] mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;

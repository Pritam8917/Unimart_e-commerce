"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Star } from "lucide-react";
import { allProducts } from "../data/products";
import { useRouter } from "next/navigation";

const beautyProducts = allProducts.filter(p => p.id >= 201 && p.id <= 212);

const BeautyDeals = () => {
  const router = useRouter();
  return (
    <section className="py-16 bg-muted/30 px-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Best Deals on Beauty</h2>
          <p className="text-muted-foreground">Glow up with our exclusive beauty deals</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {beautyProducts.map((product) => (
            <Card key={product.id} onClick={() => router.push(`/productdetails/${product.id}`)} className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-[#FF6E42] hover:bg-[#2DA2A4] text-white  text-xs">
                  Sale
                </Badge>
              </div>
              <CardContent className="p-2.5">
                <h3 className="font-semibold text-xs text-foreground mb-1.5 line-clamp-2 min-h-8">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1.5">
                  <Star className="w-3 h-3 text-[#FF6E42] fill-[#FF6E42]" />
                  <span className="text-xs font-medium text-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-[#2DA2A4]">${product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyDeals;

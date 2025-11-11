"use client";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Smartphone, Tablet, Laptop } from "lucide-react";
import { useRouter } from "next/navigation";
import { allProducts } from "@/app/data/products";
import Image from "next/image";

const TechDeals = () => {
  const router = useRouter();
  const techProducts = allProducts.filter(p => p.id >= 501 && p.id <= 512);
  
  const deals = techProducts.map((product, index) => {
    const categories = ["Smartphones", "Smartphones", "Smartphones", "Tablets", "Tablets", "Tablets", "Laptops", "Laptops", "Laptops", "Laptops", "Smartphones", "Tablets"];
    const icons = [Smartphone, Smartphone, Smartphone, Tablet, Tablet, Tablet, Laptop, Laptop, Laptop, Laptop, Smartphone, Tablet];
    
    return {
      id: product.id,
      category: categories[index],
      icon: icons[index],
      name: product.name,
      price: `$${product.price}`,
      originalPrice: `$${product.originalPrice}`,
      discount: product.discount,
      image: product.image,
    };
  });

  return (
    <section className="py-16 bg-muted/30 px-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Best Deals on Tech</h2>
          <p className="text-muted-foreground">Smartphones, Tablets & Laptops at unbeatable prices</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {deals.map((deal) => {
            const Icon = deal.icon;
            return (
              <Card
                key={deal.id}
                className={`group overflow-hidden hover:shadow-lg transition-all duration-300  ${
                  deal.id === 7 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
               
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.name}
                    width={700}
                    height={700}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer ${
                      deal.id === 7 ? "h-full" : "h-40"
                    }`}
                     onClick={() => router.push(`/productdetails/${deal.id}`)}
                  />
                  <Badge className="absolute top-2 right-2 bg-[#FF6E42] text-white text-xs hover:bg-[#2DA2A4] transition-colors">
                    {deal.discount}
                  </Badge>
                  <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Icon className="h-3 w-3 text-[#2DA2A4]" />
                    <span className="text-xs font-medium">{deal.category}</span>
                  </div>
                </div>
                <div className={deal.id === 7 ? "p-4" : "p-2.5"}>
                  <h3 className={`font-semibold mb-2 line-clamp-2 ${
                    deal.id === 7 ? "text-lg min-h-12" : "text-sm min-h-10"
                  }`}>
                    {deal.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`font-bold text-[#08A0AA] ${
                      deal.id === 7 ? "text-2xl" : "text-base"
                    }`}>
                      {deal.price}
                    </span>
                    <span className=" line-through text-xs">{deal.originalPrice}</span>
                  </div>
                  <Button  size="sm" className="bg-[#08A0AA] text-white hover:bg-[#20A9B2] w-full cursor-pointer"  onClick={() => router.push(`/productdetails/${deal.id}`)}>
                    Shop Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechDeals;

"use client";
import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { allProducts } from "../data/products";
import { useRouter } from "next/navigation";
import Image from "next/image";

const homeDeals = allProducts.filter((p) => p.id >= 101 && p.id <= 112);

const HomeDealsSection = () => {
  const router = useRouter();
  return (
    <section className="py-16 bg-muted/30 px-15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Top Deals on Home Essentials
            </h2>
            <p className="text-muted-foreground">
              Transform your space with amazing discounts
            </p>
          </div>
          <Link href="/productspage/home">
            <Button
              variant="default"
              className="bg-[#08A0AA] text-white hover:bg-[#20A9B2] py-5 cursor-pointer"
            >
              Shop Now
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {homeDeals.map((deal) => (
            <Card
              key={deal.id}
              className={`group overflow-hidden  hover:shadow-lg transition-all duration-300 ${
                deal.id === 101 ? "sm:col-span-2" : ""
              }`}
            
            >
              <div
                className={`relative overflow-hidden ${
                  deal.id === 101 ? "aspect-video" : "aspect-square"
                }`}
              >
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    onClick={() => {
                  router.push(`/productdetails/${deal.id}`);
              }}
                />
                <Badge className="absolute top-2 right-2 bg-[#ED2020] text-white text-xs hover:bg-[#2DA2A4] transition-colors">
                  {deal.discount}
                </Badge>
              </div>
              <CardContent className="p-2.5">
                <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 min-h-10">
                  {deal.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#08A0AA]">
                    ${deal.price}
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    ${deal.originalPrice}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDealsSection;

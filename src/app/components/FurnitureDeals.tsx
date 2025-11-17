"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Tag } from "lucide-react";
import Link from "next/link";
import { allProducts } from "../data/products";
import Image from "next/image";

const furnitureDeals = allProducts.filter((p) => p.id >= 301 && p.id <= 310);

const FurnitureDeals = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-15">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-1">
              Best Deals on Furniture
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Premium furniture at unbeatable prices
            </p>
          </div>
          <Link href="/productspage/furniture">
            <Button
              variant="outline"
              className="hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer"
            >
              See All Deals
            </Button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {furnitureDeals.map((item) => (
            <Link
              key={item.id}
              href={`/productdetails/${item.id}`}
              className={`group cursor-pointer ${
                item.id === 301 ? "md:col-span-2" : ""
              }`}
            >
              <Card className="flex flex-col h-full overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg">
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden ${
                    item.id === 301 ? "aspect-video" : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-[#08A0AA] text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                    <Tag className="w-3 h-3" />
                    {item.discount}
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="flex flex-col grow p-3 justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 min-h-10">
                      {item.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-base font-bold text-[#08A0AA]">
                        ₹{item.price}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        ₹{item.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer mt-auto"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureDeals;

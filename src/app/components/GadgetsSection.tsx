"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allProducts } from "../data/products";
import Image from "next/image";

const gadgets = allProducts.filter((p) => p.id >= 401 && p.id <= 412);

const GadgetsSection = () => {
  const router = useRouter();


  return (
    <section className="py-16 bg-background px-15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Best Gadgets & Appliances
            </h2>
            <p className="text-muted-foreground">
              Upgrade your lifestyle with smart technology
            </p>
          </div>
          <Link href="/productspage/gadgets">
            <Button
              variant="default"
              className="bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer"
            >
              Explore All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {gadgets.map((gadget) => (
            <Card
              key={gadget.id}
              className={`group overflow-hidden  hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                gadget.id === 2 ? "md:col-span-2" : ""
              }`}
            
            >
              <div
                className={`relative overflow-hidden ${
                  gadget.id === 2 ? "aspect-video" : "aspect-square"
                }`}
              >
                <Image
                  src={gadget.image}
                  alt={gadget.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                   onClick={() => router.push(`/productdetails/${gadget.id}`)}
                />
                <Badge className="absolute top-2 left-2 bg-[#20A9B2]  text-white text-xs">
                  {gadget.badge}
                </Badge>
              </div>
              <CardContent className="p-2.5">
                <h3 className="font-semibold text-sm text-foreground mb-1.5 line-clamp-2 min-h-10">
                  {gadget.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base font-bold text-[#20A9B2]">
                    ${gadget.price}
                  </span>
                  <span className="text-xs  line-through">
                    ${gadget.originalPrice}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-[#08A0AA] text-white hover:bg-[#20A9B2] cursor-pointer"
                  onClick={() => router.push(`/productdetails/${gadget.id}`)}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GadgetsSection;

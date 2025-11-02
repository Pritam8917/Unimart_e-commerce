"use client";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { useRouter } from "next/navigation";
import { allProducts } from "../data/products";

const newArrivals = allProducts.filter((p) => p.id >= 1 && p.id <= 12);

const NewArrivals = () => {
  const router = useRouter();
  return (
    <section className="py-16 bg-muted/30 px-15" id="new-arrival">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              New Arrivals
            </h2>
            <p className="text-muted-foreground">
              Check out our latest collection
            </p>
          </div>
          {/* <Button variant="outline" className="hover:bg-[#FF6E42] py-5 hover:text-white">View All →</Button> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {newArrivals.map((product) => (
            <Card
              key={product.id}
              className={`group overflow-hidden  hover:shadow-lg transition-all duration-300 ${
                product.id === 1 ? "md:row-span-2" : ""
              }`}
              onClick={() => router.push(`/productdetails/${product.id}`)}
            >
              <div className="relative h-full overflow-hidden ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
                <Badge className="absolute top-2 left-2 bg-[#FF6E42] text-white text-xs hover:bg-[#2DA2A4] transition-colors">
                  {product.badge}
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-background via-background/90 to-transparent p-2.5">
                  <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-base font-bold text-[#2DA2A4]">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

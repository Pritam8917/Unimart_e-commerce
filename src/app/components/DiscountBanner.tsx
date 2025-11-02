import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Tag, Clock } from "lucide-react";

const DiscountBanner = () => {
  return (
    <section className="py-6 bg-[#FF6E42] border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className="flex items-center gap-3 text-accent-foreground">
            <div className="flex items-center justify-center w-12 h-12 bg-[#FF7D55] rounded-lg">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Flash Sale!</h3>
              <p className="text-sm text-white">Up to 80% off on selected items</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#FF7D55] px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-white" />
              <div className="text-white font-semibold text-lg">
                23:59:45
              </div>
            </div>
            
            <Link href="/productspage/deals">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 border border-border cursor-pointer">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;

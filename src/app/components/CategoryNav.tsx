import Link from "next/link";
import {Sofa,Shirt,UtensilsCrossed,Sparkles,BookOpen, Baby, Watch, Laptop} from "lucide-react";
import { Button } from "@/app/components/ui/button";

const CategoryNav = () => {
  const categories = [
    { name: "Fashion", icon: Shirt },
    { name: "Furniture", icon: Sofa },
    { name: "Electronics", icon: Laptop },
    { name: "Beauty", icon: Sparkles },
    { name: "Books", icon: BookOpen },
    { name: "Toys", icon: Baby },
    { name: "Watches", icon: Watch },
    { name: "Kitchen", icon: UtensilsCrossed },
  ];

  return (
    <div className="bg-card border-b border-border sticky top-[69px] z-40 px-15">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const categorySlug = category.name
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-");
            return (
              <Link key={category.name} href={`/CategoryPage/${categorySlug}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 whitespace-nowrap hover:bg-[#E6F5F6] hover:text-[#08A0AA] transition-colors text-md cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;

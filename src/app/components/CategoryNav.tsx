import  Link  from "next/link";
import { Sofa, Smartphone, Shirt, UtensilsCrossed, Sparkles, BookOpen, Baby, Watch, Laptop } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const CategoryNav = () => {
  const categories = [
    { name: "Electronics", icon: Smartphone },
    { name: "Fashion", icon: Shirt },
    { name: "Furniture", icon: Sofa },
    { name: "Beauty", icon: Sparkles },
    { name: "Books", icon: BookOpen },
    { name: "Toys", icon: Baby },
    { name: "Watches", icon: Watch },
    { name: "Computers", icon: Laptop },
    { name: "Kitchen", icon: UtensilsCrossed },
  ];

  return (
    <div className="bg-card border-b border-border sticky top-[69px] z-40 px-15">
      <div className="container mx-auto px-4">
        <div className="flex gap-10 py-5 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const categorySlug = category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
            return (
              <Link key={category.name} href={`/CategoryPage/${categorySlug}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 whitespace-nowrap hover:bg-primary/10 hover:text-primary transition-colors text-md cursor-pointer"
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

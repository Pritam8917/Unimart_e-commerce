import Link from "next/link";
import ProductCard from "./ProductCard";
import { allProducts } from "../data/products";

const products  = allProducts.filter((p) => p.id>=601 && p.id<=612);

const FeaturedCards = () => {
  return (
    <section className="py-16 bg-background px-15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <Link href="/productspage/featured" className="text-[#2DA2A4] hover:text-[#32bac4] font-semibold transition-colors cursor-pointer">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;

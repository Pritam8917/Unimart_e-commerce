"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";

const ProductsPage = () => {
  const { type } = useParams() ?? {};
  const typeParam = Array.isArray(type) ? type[0] : type ?? "featured";

  const titles: Record<string, string> = {
    featured: "Featured Products",
    deals: "Best Deals",
    "new-arrivals": "New Arrivals",
    tech: "Tech Products",
    home: "Home Essentials",
    furniture: "Furniture Collection",
    beauty: "Beauty Products",
    gadgets: "Latest Gadgets",
  };

  const products = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 700) + 100,
    image: `https://picsum.photos/seed/${i}/500/500`,
    rating: Math.floor(Math.random() * 2) + 4,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          {titles[typeParam] ?? "All Products"}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;

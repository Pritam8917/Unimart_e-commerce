"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";

const SearchPage = () => {
  const searchParams = useSearchParams(); // ✅ no destructuring
  const query = searchParams.get("q") || "";

  // Mock search results
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `${query} Result ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 700) + 100,
    image: `https://images.unsplash.com/photo-${
      1500000000000 + i
    }?w=500&h=500&fit=crop`,
    rating: Math.floor(Math.random() * 2) + 4,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Search Results</h1>
        <p className="text-muted-foreground mb-8">
          Found {products.length} results for "{query}"
        </p>

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

export default SearchPage;

"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
import { allProducts } from "@/app/data/products"; // Add this import
import { useState, useEffect } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [query]);

  const searchResults = allProducts.filter((p) => {
    const queryLower = query.toLowerCase();
    const text = [p.name, p.category, p.description].join(" ").toLowerCase();
    const synonyms: Partial<Record<string, string[]>> = {
      mobile: ["iphone", "galaxy", "pixel", "oneplus", "smartphone"],
    };
    const matchDirect = text.includes(queryLower);
    const matchSynonym = synonyms[queryLower]?.some((word) => text.includes(word));

    return matchDirect || matchSynonym;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Search Results</h1>
        {query ? (
          <p className="text-muted-foreground mb-8">
            Found {searchResults.length} results for &quot;{query}&quot;
          </p>
        ) : (
          <p className="text-muted-foreground mb-8">
            Please enter a search term
          </p>
        )}

        {isLoading ? (
          <div>Loading...</div>
        ) : searchResults.length === 0 ? (
          <div>No results found for &quot;{query}&quot;</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {searchResults.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;

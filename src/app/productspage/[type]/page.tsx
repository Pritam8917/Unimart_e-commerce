"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
import { allProducts } from "@/app/data/products";

const ProductsPage = () => {
  const { type } = useParams();
  const typeParam = Array.isArray(type) ? type[0] : type ?? "featured";

  const titles: Record<string, string> = {
    featured: "Featured Products",
    deals: "Best Deals",
    tech: "Tech Products",
    home: "Home Essentials",
    furniture: "Furniture Collection",
    beauty: "Beauty Products",
    gadgets: "Latest Gadgets",
    shop : "Explore Our Collection"
  };

  // ✅ Filter products dynamically if needed
  const products = typeParam === "featured" ? allProducts.filter((p) => p.id>=601 && p.id<=624) : 
  allProducts.filter((p) => p.category?.toLowerCase() === typeParam.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">
          {titles[typeParam] ?? "All Products"}
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No products found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;

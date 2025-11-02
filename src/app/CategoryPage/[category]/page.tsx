"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
import { allProducts } from "@/app/data/products";

const CategoryPage = () => {
  const { category } = useParams();
  const products = allProducts.filter(
    (p) => p.category?.toLowerCase() === category
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {category || "Products"}
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

export default CategoryPage;

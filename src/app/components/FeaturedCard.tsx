import Link from "next/link";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4,
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 149,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 189,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4,
  },
  {
    id: 5,
    name: "Running Shoes Pro",
    price: 129,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 6,
    name: "Minimalist Wallet",
    price: 49,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    rating: 4,
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    price: 39,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    rating: 4,
  },
  {
    id: 9,
    name: "Yoga Mat Premium",
    price: 59,
    originalPrice: 89,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 10,
    name: "Stainless Steel Water Bottle",
    price: 35,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    rating: 4,
  },
  {
    id: 11,
    name: "Canvas Sneakers",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 12,
    name: "USB-C Hub Adapter",
    price: 45,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    rating: 4,
  },
];

const FeaturedCards = () => {
  return (
    <section className="py-16 bg-background px-15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <Link href="/productspage/featured" className="text-[#2DA2A4] hover:text-[#32bac4] font-semibold transition-colors">
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

import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Shopping Trends for 2024",
      date: "March 15, 2025",
      excerpt: "Discover the latest trends shaping the e-commerce landscape this year.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "How to Find the Best Deals Online",
      date: "March 10, 2025",
      excerpt: "Expert tips on maximizing your savings when shopping online.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Sustainable Shopping Guide",
      date: "March 5, 2025",
      excerpt: "Make eco-friendly choices with our comprehensive guide to sustainable shopping.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />
      
      <div className="container mx-auto px-15 py-16">
        <h1 className="text-4xl font-bold mb-8">ShopHub Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
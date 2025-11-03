import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Shopping Trends for 2024",
      date: "March 15, 2025",
      excerpt:
        "Discover the latest trends shaping the e-commerce landscape this year.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "How to Find the Best Deals Online",
      date: "March 10, 2025",
      excerpt:
        "Expert tips on maximizing your savings when shopping online.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Sustainable Shopping Guide",
      date: "March 5, 2025",
      excerpt:
        "Make eco-friendly choices with our comprehensive guide to sustainable shopping.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      {/*  Navbar & Categories */}
      <Navbar />
      <CategoryNav />

      {/*  Blog Section */}
      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Unimart Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest insights, shopping trends, and sustainability tips.
          </p>
        </div>

        {/*  Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/*  Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/*  Content */}
              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-[#08A0AA] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href="#"
                  className="flex items-center mt-4 text-[#08A0AA] font-medium hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/*  Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;

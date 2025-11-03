import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  ShoppingBag,
} from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Zap,
      title: "Flash Deals",
      description: "Limited time offers",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: TrendingUp,
      title: "Trending Now",
      description: "Most popular items",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Customer favorites",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const featuredProducts = [
    {
      image:
        "https://imgs.search.brave.com/7YWAyYyf9M0JYBBoTBd4_IGkRl0LJk0LEEOkFgTcuXY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ob2Rp/bmtlZS1wcm9kdWN0/aW9uLnMzLmFtYXpv/bmF3cy5jb20vdXBs/b2Fkcy9pbWFnZXMv/NGEyNmM1ODQtMDZl/My00ZGFhLWEwZDAt/MTE3ZjAxZmU2Njhk/L0RTQ180NTQ5Lmpw/Zw",
      title: "Premium Watch",
      price: "₹299",
      badge: "50% OFF",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589642380614-4a8c2147b857?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bmdsYXNzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Designer Sunglasses",
      price: "₹159",
      badge: "NEW",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      title: "Wireless Headphones",
      price: "₹199",
      badge: "TRENDING",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[calc(100vh-144px)] overflow-hidden px-15"
      style={{
        background:
          "linear-gradient(to bottom right, #FFF8F6, #FEECDC, #FFD6C2)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-14  relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            {/* Top Badge */}
            <div
              className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-3 rounded-full border"
              style={{
                backgroundColor: "rgba(8, 160, 170, 0.1)", // light teal background
                borderColor: "rgba(8, 160, 170, 0.3)", // subtle teal border
              }}
            >
              <div className="relative flex h-3 w-3">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "#08A0AA" }}
                ></span>
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{ backgroundColor: "#08A0AA" }}
                ></span>
              </div>
              <span
                className="text-sm font-medium"
              >
                New Arrivals Just Dropped
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                Discover
                <span className="block  bg-linear-to-r from-[#0097B2] via-[#7B5CF5] to-[#F58AD6] bg-clip-text text-transparent animate-in fade-in duration-1000 delay-300">
                  Your Style
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-[1.4]">
                Explore curated collections that match your unique taste.
                Premium quality, unbeatable prices.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 py-4">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#08A0AA]">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#08A0AA]">
                  10K+
                </div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#08A0AA]">
                  4.9★
                </div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-7">
              <Link href="/productspage/shop">
                <Button
                  size="lg"
                  className="py-7 px-8 text-base group shadow-lg  text-white bg-[#20A9B2] hover:bg-[#08A0AA] hover:text-white cursor-pointer"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/productspage/featured">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 hover:bg-[#FF6E42] hover:text-white transition-colors cursor-pointer"
                >
                  <Star className="mr-2 w-5 h-5" />
                  Featured Deals
                </Button>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer  ${
                    activeFeature === index
                      ? `${feature.bgColor} border-current ${feature.color} scale-105`
                      : "bg-muted/50 border-border hover:scale-105"
                  }`}
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative h-[600px] animate-in slide-in-from-right duration-700">
            {/* Main Featured Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop"
                  alt="Featured Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="mb-2 bg-primary text-primary-foreground">
                    Summer Collection
                  </Badge>
                  <h3 className="text-2xl font-bold text-white">
                    Up to 50% Off
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Product Cards */}
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className={`absolute w-40 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110  group ${
                  index === 0
                    ? "top-0 right-12 animate-in slide-in-from-top duration-1000 delay-500"
                    : index === 1
                    ? "bottom-12 right-0 animate-in slide-in-from-bottom duration-1000 delay-700"
                    : "bottom-20 left-0 animate-in slide-in-from-left duration-1000 delay-900"
                }`}
              >
                <div className="relative">
                  <Badge className="absolute -top-1 -right-1 z-10 text-xs bg-[#EF4343] text-white">
                    {product.badge}
                  </Badge>
                  <div className="aspect-square rounded-lg overflow-hidden mb-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xs font-semibold mb-1 line-clamp-1">
                    {product.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                </div>
              </Card>
            ))}

            {/* Floating Action Button */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4">
              <Link href="/cartpage">
                <Button
                  size="icon"
                  className="h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-transform animate-in zoom-in duration-500 delay-1000  text-white bg-[#20A9B2] hover:bg-[#08A0AA] hover:text-white cursor-pointer"
                >
                  <ShoppingBag className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-muted to-transparent" />
    </section>
  );
};

export default Hero;

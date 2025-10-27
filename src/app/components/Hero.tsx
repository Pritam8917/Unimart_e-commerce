"use client";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
// @ts-ignore: no type declarations for 'embla-carousel-autoplay'
import Autoplay from "embla-carousel-autoplay";
const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      description: "Discover the latest trends with up to 50% off on selected items",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&auto=format&fit=crop",
      primaryBtn: "Shop Now",
      primaryLink: "/ProductsPage/featured",
    },
    {
      id: 2,
      title: "Tech Gadgets & More",
      description: "Amazing deals on smartphones, tablets, and accessories",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&auto=format&fit=crop",
      primaryBtn: "Explore Deals",
      primaryLink: "/ProductsPage/gadgets",
    },
    {
      id: 3,
      title: "Home & Living Sale",
      description: "Beautiful furniture and decor for every space",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&auto=format&fit=crop",
      primaryBtn: "Shop Home",
      primaryLink: "/ProductsPage/home",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[calc(100vh-144px)] min-h-[500px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/90">
                      {slide.description}
                    </p>
                    
                    <Link href={slide.primaryLink}>
                      <Button size="lg" className="bg-[#08A0AA] text-white hover:bg-[#06A0AA]/90 text-base px-8">
                        {slide.primaryBtn}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white text-foreground cursor-pointer" />
        <CarouselNext className="right-4 bg-white/90 hover:bg-white text-foreground cursor-pointer" />
      </Carousel>
    </section>
  );
};

export default Hero;

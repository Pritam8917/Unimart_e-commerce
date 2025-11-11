import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const PromoBanners = () => {
  return (
    <section className="py-8 bg-background px-15">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Large Banner 1 - Full Width on Mobile */}
          <Link href="/CategoryPage/electronics" className="lg:col-span-2 group">
            <div className="relative h-[350px] rounded-2xl overflow-hidden bg-primary">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop"
                  width={1200}
                  height={350}
                alt="Electronics Sale"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />
              <div className="relative h-full flex flex-col justify-center px-8 md:px-12">
                <span className="text-white/80 text-sm font-medium mb-2">Limited Time Offer</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Electronics Mega Sale</h3>
                <p className="text-white/90 mb-4 max-w-md">Get up to 60% off on smartphones, laptops & accessories</p>
                <Button className="bg-white text-foreground hover:bg-white/90 w-fit">
                  Shop Electronics
                </Button>
              </div>
            </div>
          </Link>

          {/* Small Banner 1 */}
          <Link href="/CategoryPage/fashion" className="group">
            <div className="relative h-[350px] rounded-2xl overflow-hidden bg-accent">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop"
                alt="Fashion Sale"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Fashion Week</h3>
                <p className="text-white/90 text-sm mb-3">Trendy styles up to 50% off</p>
                <Button variant="outline" className="bg-white/20 text-white border-white/50 hover:bg-white hover:text-foreground w-fit">
                  Explore Now
                </Button>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Medium Banner 1 */}
          <Link href="/productspage/home" className="group">
            <div className="relative h-[280px] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop"
                alt="Home Decor"
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20" />
              <div className="relative h-full flex flex-col justify-center px-6 md:px-8">
                <span className="text-white/80 text-xs font-medium mb-1">New Collection</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Home & Living</h3>
                <p className="text-white/90 text-sm mb-3">Transform your space</p>
                <Button size="sm" className="bg-white text-foreground hover:bg-white/90 w-fit">
                  Shop Now
                </Button>
              </div>
            </div>
          </Link>

          {/* Medium Banner 2 */}
          <Link href="/CategoryPage/beauty" className="group">
            <div className="relative h-[280px] rounded-2xl overflow-hidden bg-secondary">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop"
                alt="Beauty Products"
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-l from-black/60 to-black/20" />
              <div className="relative h-full flex flex-col justify-center items-end text-right px-6 md:px-8">
                <span className="text-white/80 text-xs font-medium mb-1">Beauty Essentials</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Glow & Shine</h3>
                <p className="text-white/90 text-sm mb-3">Premium beauty products</p>
                <Button size="sm" className="bg-white text-foreground hover:bg-white/90">
                  Discover
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;

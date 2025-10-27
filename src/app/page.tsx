"use client";
import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Hero from "@/app/components/Hero";
import DiscountBanner from "@/app/components/DiscountBanner";
import PromoBanners from "@/app/components/PromoBanners";
import NewArrivals from "@/app/components/NewArrivals";
import HomeDealsSection from "@/app/components/HomeDealsSection";
import FurnitureDeals from "@/app/components/FurnitureDeals";
import BeautyDeals from "@/app/components/BeautyDeals";
import GadgetsSection from "@/app/components/GadgetsSection";
import TechDeals from "@/app/components/TechDeals";
import FeaturedCards  from "@/app/components/FeaturedCard";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CategoryNav />
      <Hero />
      <DiscountBanner />
      <PromoBanners />
      <NewArrivals />
      <HomeDealsSection />
      <FurnitureDeals />
      <BeautyDeals />
      <GadgetsSection />
      <TechDeals />
      <FeaturedCards />
      <Footer />
    </main>
  );
}

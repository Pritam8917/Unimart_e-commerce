"use client";

import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Card } from "@/app/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <CategoryNav />

      {/* Page Header */}
      <div className="py-14 border-b border-border text-center bg-white">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-10 h-10 text-[#08A0AA]" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 py-12">
        <Card className="p-8 md:p-10 space-y-8 bg-white shadow-sm border border-border">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              1. Use of Our Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing UniMart, you agree to comply with our terms. You may
              not use our services for unlawful purposes or to harm others.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              2. Product Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive for accuracy in product listings. However, errors in
              descriptions or prices may occur and we reserve the right to
              correct them.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              3. Payments
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All payments are processed securely. By completing an order, you
              confirm that all payment information is valid and authorized.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              UniMart shall not be held liable for any indirect or consequential
              damages arising from your use of our services or website.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-6">
            Last updated: November 2025
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

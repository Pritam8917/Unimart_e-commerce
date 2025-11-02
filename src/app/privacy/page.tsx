"use client";

import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Card } from "@/app/components/ui/card";
import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar + Category */}
      <Navbar />
      <CategoryNav />

      {/* Header Section */}
      <div className="py-14 border-b border-border text-center bg-white">
        <div className="flex justify-center mb-4">
          <Lock className="w-10 h-10 text-[#08A0AA]" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 py-12">
        <Card className="p-8 md:p-10 space-y-8 bg-white shadow-sm border border-border">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal data such as your name, email, phone
              number, address, and payment details when you make a purchase or
              create an account with UniMart.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the collected information to process your orders, improve
              our services, send notifications, and provide customer support.
              Your data helps us personalize your experience.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              3. Data Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement strong security measures to protect your personal
              data from unauthorized access, alteration, or disclosure. All
              transactions are encrypted and securely processed.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              4. Sharing of Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, rent, or share your data with third parties except
              as necessary to fulfill your order (e.g., payment processors or
              shipping providers).
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              5. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal
              information. Contact our support team if you wish to exercise
              these rights.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-6">
            Last updated: November 2025
          </p>
        </Card>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

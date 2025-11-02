"use client";

import Navbar from "@/app/components/Navbar";
import CategoryNav from "@/app/components/CategoryNav";
import Footer from "@/app/components/Footer";
import { Card } from "@/app/components/ui/card";
import { Cookie } from "lucide-react";

export default function CookiePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar + Category Navigation */}
      <Navbar />
      <CategoryNav />

      {/* Header */}
      <div className="py-14 border-b border-border text-center bg-white">
        <div className="flex justify-center mb-4">
          <Cookie className="w-10 h-10 text-[#08A0AA]" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Cookie Policy
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          This Cookie Policy explains how UniMart uses cookies and similar
          technologies to enhance your browsing experience.
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 py-12">
        <Card className="p-8 md:p-10 space-y-8 bg-white shadow-sm border border-border">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              1. What Are Cookies?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device when you visit
              a website. They help remember your preferences and improve how the
              website functions.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              2. How We Use Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience on UniMart, such as:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Remembering items in your shopping cart</li>
              <li>Saving your login details and preferences</li>
              <li>Analyzing website traffic and performance</li>
              <li>Displaying personalized product recommendations</li>
            </ul>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              3. Types of Cookies We Use
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              UniMart uses the following types of cookies:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Required for site
                functionality, like secure login or checkout.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how users
                interact with our site.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Enhance site features such
                as language or region settings.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used to deliver relevant
                ads and measure campaign effectiveness.
              </li>
            </ul>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              4. Managing Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You can manage or delete cookies through your browser settings.
              Disabling cookies may affect certain features of our website.
            </p>
          </section>

          <hr className="border-t border-border/50" />

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#08A0AA]">
              5. Updates to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy occasionally. Please review it
              periodically to stay informed about how we use cookies.
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

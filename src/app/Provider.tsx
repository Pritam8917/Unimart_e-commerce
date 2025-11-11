"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../contexts/CartContext/page";
import { WishlistProvider } from "../contexts/wishlistcontext/page";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        {" "}
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </SessionProvider>
  );
}

"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./CartContext/page";
import { WishlistProvider } from "./wishlistcontext/page";

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

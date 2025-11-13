"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  
  axios.defaults.withCredentials = true;
  // Fetch wishlist from MongoDB
  useEffect(() => {
    axios
      .get("/api/wishlist")
      .then((res) => {
        setWishlistItems(res.data.items || []);
      })
      .catch(() => {});
  }, []);

  const addToWishlist = async (item: WishlistItem) => {
    const res = await axios.post("/api/wishlist", item);
    setWishlistItems(res.data.items);
  };

  const removeFromWishlist = async (id: number) => {
    const res = await axios.delete("/api/wishlist", { data: { id } });
    setWishlistItems(res.data.items);
  };

  const isInWishlist = (id: number) => wishlistItems.some((i) => i.id === id);
  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
};

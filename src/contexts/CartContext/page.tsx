"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
 axios.defaults.withCredentials = true;
  // Load from DB on mount
  useEffect(() => {
    axios.get("/api/cart").then((res) => {
      setCartItems(res.data.items || []);
    });
  }, []);

  const addToCart = async (item: Omit<CartItem, "quantity">) => {
    const res = await axios.post("/api/cart", item);
    setCartItems(res.data.items);
  };

  const removeFromCart = async (id: number) => {
    const res = await axios.delete(`/api/cart/${id}`);
    setCartItems(res.data.items);
  };

  const updateQuantity = async (id: number, delta: number) => {
    const res = await axios.put(`/api/cart/${id}`, { delta });
    setCartItems(res.data.items);
  };

  const clearCart = async () => {
    await axios.delete("/api/cart/");
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

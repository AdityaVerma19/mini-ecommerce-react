import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

  //Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  //Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Add to cart
  const addToCart = (product) => {
    setCart(prev => {
      const currentQty = prev[product.id]?.qty || 0;
      if (currentQty >= product.stock) return prev;

      return {
        ...prev,
        [product.id]: { ...product, qty: currentQty + 1 }
      };
    });
  };

  //Remove from cart
  const removeFromCart = (id) => {
    setCart(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  //Update quantity with stock protection
  const updateQty = (id, qty) => {
    setCart(prev => {
      const item = prev[id];
      if (qty > item.stock || qty < 1) return prev;

      return {
        ...prev,
        [id]: { ...item, qty }
      };
    });
  };

  //Cart totals
  const totalItems = Object.values(cart).reduce((a,b)=>a+b.qty,0);
  const totalPrice = Object.values(cart).reduce((a,b)=>a+b.qty*b.price,0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

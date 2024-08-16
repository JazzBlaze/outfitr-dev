import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Product type
interface Product {
  _id: string;
  brand: string;
  cover_image: string;
  productName: string;
  price: number;
  fit: string;
  sub_category: string;
}

// Define the context type
interface CartContextType {
  cartProducts: Product[];
  addToCart: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromWishlist = (productId: string) => {
    setCartProducts((prevProducts) => prevProducts.filter(product => product._id !== productId));
  };

  const clearWishlist = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromWishlist, clearWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

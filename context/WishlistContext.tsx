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
interface WishlistContextType {
  wishlistProducts: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
}

// Create the context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Create a provider component
export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlistProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistProducts((prevProducts) => prevProducts.filter(product => product._id !== productId));
  };

  const clearWishlist = () => {
    setWishlistProducts([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlistProducts, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

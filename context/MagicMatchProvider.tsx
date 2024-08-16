import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the product type
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
interface ProductContextType {
  product: Product | null;
  setProduct: (product: Product | null) => void;
}

// Create the context
const MagicProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const MagicProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <MagicProductContext.Provider value={{ product, setProduct }}>
      {children}
    </MagicProductContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useProduct = (): ProductContextType => {
  const context = useContext(MagicProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

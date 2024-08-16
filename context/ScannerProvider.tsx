import React, { createContext, useContext, useState, ReactNode } from 'react';



// Define the context type
interface ProductContextType {
    scannerProduct: any | null;
  setScannerProduct: (product: any | null) => void;
}

// Create the context
const ScannerProductContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ScannerProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scannerProduct, setScannerProduct] = useState<any | null>(null);

  return (
    <ScannerProductContext.Provider value={{ scannerProduct, setScannerProduct }}>
      {children}
    </ScannerProductContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useScannerProduct = (): ProductContextType => {
  const context = useContext(ScannerProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

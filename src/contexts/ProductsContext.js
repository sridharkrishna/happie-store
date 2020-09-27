import React, { createContext, useState } from 'react';
import { mockProducts } from '../utils/mock';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(mockProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
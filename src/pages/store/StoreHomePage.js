import React from 'react';
import ProductsGrid from './ProductsGrid';

const StoreHomePage = ({ history }) => (
  <>
    <div className="text-center mt-5">
      <h1>Happie Store</h1>
      <p>This is the Store Page.</p>
    </div>
    <ProductsGrid />
  </>  
);

export default StoreHomePage;
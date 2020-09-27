import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NotFound from '../pages/NotFound';
import UnauthorizedLayout from '../layouts/UnauthorizedLayout';
import StoreLayout from '../layouts/StoreLayout';
import ProductsContextProvider from '../contexts/ProductsContext';
import CartContextProvider from '../contexts/CartContext';
import AuthorizedRoute from './AuthorizedRoute';

// used react-router-dom to route pages based on the url path.
// Here we have simple views which are store front, Cart views and if there is no views 
// for the path then it will show NotFound 404.
const Routes = () => {
  return (
    <Router>
      {/* Switch to render the first child which matches the path */}
      <Switch>
        <Route path="/auth" component={UnauthorizedLayout} />
        {/* Here we have used Context API for products and cart. So context
            handle global state for that component and accessible to all of its
            consumer (child components)
        */}
        <ProductsContextProvider>
          <CartContextProvider>
            <AuthorizedRoute path="/" component={StoreLayout} />
          </CartContextProvider>
        </ProductsContextProvider>
        <Redirect to="/auth"/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
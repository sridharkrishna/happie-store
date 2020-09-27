import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import StoreHeader from '../components/StoreHeader';
import StoreFooter from '../components/StoreFooter';
import StoreHomePage from '../pages/store/StoreHomePage';
import CartPage from '../pages/cart/CartPage';

import 'bootswatch/dist/lux/bootstrap.css'


const StoreLayout = ({ match }) => (
  <>
    <StoreHeader />
    <main className="container">
      <Switch>
        <Route path={`${match.path}`} exact component={StoreHomePage} />
        <Route path={`${match.path}`} component={CartPage} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
    <StoreFooter />
  </>
)

export default StoreLayout;
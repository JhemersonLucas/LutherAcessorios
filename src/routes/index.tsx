import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Chat from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import SignInAdmin from '../pages/SingInAdmin';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Shop} />
    <Route path="/p/:id" component={Product} />
    <Route path="/admin" component={SignInAdmin} />
    <Route path="/main" component={Admin} />
  </Switch>
);

export default Routes;

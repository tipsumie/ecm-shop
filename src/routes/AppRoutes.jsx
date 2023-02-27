import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, ProductDetail, Cart } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;

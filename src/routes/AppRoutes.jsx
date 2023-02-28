import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, ProductDetail } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;

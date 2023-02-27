import React, { useEffect } from 'react';
import { AppHeader, MainContent, Footer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../store/productSlice';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productById);

  console.log(id);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  return (
    <div>
      <AppHeader />
      <div>
        <MainContent>
        <h1>{id}</h1>
          <h1>{product?.title}</h1>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;

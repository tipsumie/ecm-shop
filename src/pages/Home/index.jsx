import React, { useEffect } from 'react';
import { AppHeader, MainContent, Footer, ProductCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import { Col, Row } from 'antd';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts(10));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <div>
      <AppHeader />
      <div>
        <MainContent>
          <Row gutter={[12, 10]}>
            {products.map((product) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={product?.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </MainContent>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

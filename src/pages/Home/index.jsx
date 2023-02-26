import React,{useEffect} from 'react';
import { Header, Content, Footer } from '../../componets';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts} from '../../store/productSlice';


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Header />
      <div>
        {products.map((product) => (
          <div key={product?.id}>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
          </div>
        ))}
      </div>
      <Content />
      <Footer />
    </div>
  );
};

export default Home;

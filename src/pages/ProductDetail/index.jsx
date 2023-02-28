import React, { useEffect, useState } from 'react';
import {
  AppHeader,
  MainContent,
  Footer,
  AddToCartBtn,
  Loading,
  Quantity,
} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../store/productSlice';
import { addToCart } from '../../store/cartSlice';
import { useParams } from 'react-router-dom';
import { Col, Image, Rate } from 'antd';
import styled from 'styled-components';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productById);
  const productByIdStatus = useSelector(
    (state) => state.products.productByIdStatus
  );
  const productByIdError = useSelector(
    (state) => state.products.productByIdError
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);


  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.count) tempQty = product?.count;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product, quantity) => {
    let totalPrice = quantity * product?.price;
    dispatch(addToCart({...product, quantity: quantity, totalPrice}))
    alert(`${product?.title} has been added to your cart!`);
  }


  if (productByIdStatus === 'loading') {
    return <Loading />;
  }

  if (productByIdStatus === 'failed') {
    return <div>{productByIdError}</div>;
  }

  return (
    <div>
      <AppHeader />
      <div>
        <MainContent>
          <ProductDetailContainer>
            <ImageContainer>
              <MainImage>
                <Image
                  src={product?.image}
                  alt={product?.image}
                  width={350}
                  preview={true}
                />
              </MainImage>
            </ImageContainer>

            <Col md={12} xs={24} style={{ padding: '1.5rem' }}>
              <h1>{product?.title}</h1>
              <h2>{product?.category}</h2>
              <h4>{product?.description}</h4>
              <Rate allowHalf defaultValue={product.rating?.rate} />
              <h2>{`Price $ ${product?.price}`}</h2>

              <Quantity
                product={product}
                quantity={quantity}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
              />

              <ButtonContainer>
                <AddToCartBtn
                  size='large'
                  style={CartButton}
                  onClick={() => {addToCartHandler(product, quantity)}}
                >
                  ADD TO CART
                </AddToCartBtn>
              </ButtonContainer>
            </Col>
          </ProductDetailContainer>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  min-height: 500px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 2em;
  margin-right: 2em;
  justify-content: end;
  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-right: 0em;
  }
`;

const MainImage = styled.div`
  height: auto;
  min-height: 150px;
  position: relative;
`;

const CartButton = {
  width: '90%',
  backgroundColor: '#000',
  color: '#FFF',
  '@media screen and (max-width: 767px)': {
    width: '100%',
  },
};

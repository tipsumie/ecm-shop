import React from 'react';
import { Card, Image, Row } from 'antd';
import AddToCartBtn from '../AddToCartBtn';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product ) => {
    let totalPrice =  product?.price;
    dispatch(addToCart({...product, quantity: 1, totalPrice}))
  }

  return (
    <CardContainer
      key={product?.id}
      cover={
        <Link to={`/products/${product?.id}`}>
          <ImageContainer>
            <Image
              style={{
                height: '150px',
                objectFit: 'scale-down',
                marginTop: '15px',
              }}
              src={product?.image}
              preview={false}
            />
          </ImageContainer>
        </Link>
      }
      style={{ width: '100%' }}
    >
      <Row style={{ minHeight:'66px'}}>
      <Link to={`/products/${product?.id}`}>
        <ProductTitle>{product?.title}</ProductTitle>
      </Link>
      </Row>
      <Row justify='space-between' >
        <h4>{`Price $ ${product?.price}`}</h4>
        <AddToCartBtn  onClick={() => {addToCartHandler(product)}} />
      </Row>
    </CardContainer>
  );
};

export default ProductCard;

const ProductTitle = styled.h2`
  font-size: 14px;
  color: #000;
  &:hover {
    color: #0080FE;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled(Card)`
  min-height:350px
`;



import React from 'react';
import { Card, Image, Row } from 'antd';
import AddToCartBtn from '../AddToCartBtn';

const ProductCard = ({ product }) => {
  return (
    <Card
      title={product?.title}
      key={product?.id}
      cover={
        <Image
          style={{
            height: '110px',
            objectFit: 'scale-down',
            marginTop: '10px',
          }}
          src={product?.image}
          preview={false}
        />
      }
      style={{ width: '100%' }}
    >
      <Row justify={'space-between'}>
        <h3>{`$ ${product?.price}`}</h3>
        <AddToCartBtn />
      </Row>
    </Card>
  );
};

export default ProductCard;

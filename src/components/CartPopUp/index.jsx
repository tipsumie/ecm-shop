import React from 'react';
import { Popover, Badge, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const CartPopup = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.carts);

  const cartTotalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const content = (
    <Scrollbars autoHide style={CartScrollbars}>
      {cartItems.map((item) => (
        <div key={item?.id}>
          <Row>
            <Col>
              <Image src={item?.image} alt={item?.image} />
            </Col>
            <Col>
              <TitleContainer>
                <TitleText>{item?.title}</TitleText>
              </TitleContainer>
              <Row>
                <QuantityText>{`x ${item?.quantity}`}</QuantityText>
                <PriceText>{` $ ${item?.price}`}</PriceText>
              </Row>
            </Col>
          </Row>
          <LineHr />
        </div>
      ))}
      <TotalText>{`Total : $ ${cartTotalPrice.toFixed(2)}`}</TotalText>
    </Scrollbars>
  );

  return (
    <Popover content={content} title='Shopping Cart'>
      <Badge count={cartItems?.length}>{children}</Badge>
    </Popover>
  );
};

export default CartPopup;

const TitleText = styled.p`
  color: #000;
  font-weight: 200;
  margin-left: 1em;
  font-size: 12px;
  line-height: 0cm;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 0.5em;
  }
`;

const QuantityText = styled.p`
  color: #a1a1a1;
  margin-left: 1em;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 0.5em;
  }
`;

const PriceText = styled.p`
  color: #000;
  font-weight: 400;
  margin-left: 20px;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 5px;
  }
`;

const TotalText = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 20px;
  text-align: end;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 55px;
  margin-left: 1em;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 0.5em;
  }
`;

const LineHr = styled.hr`
  border: 0.5px solid #e8e8e8;
`;

const TitleContainer = styled.div`
  width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CartScrollbars = {
  height: "300px",
  maxHeight: "400px",
  width: "450px",
}


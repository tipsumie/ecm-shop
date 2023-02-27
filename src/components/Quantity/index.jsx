import { Button } from 'antd';
import styled from 'styled-components';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const Quantity = (props) => {
  const { product, quantity, increaseQty, decreaseQty } = props

  return (
    <QtyWrapper>
      <QtyText>Quantity :</QtyText>
      <QtyChangeWrapper>
        <QtyButton
          shape='circle'
          icon={<MinusOutlined />}
          onClick={ decreaseQty}
        />
        <QtyValue>{quantity}</QtyValue>
        <QtyButton
          shape='circle'
          icon={<PlusOutlined />}
          onClick={increaseQty}
        />
      </QtyChangeWrapper>
      {product?.count === 0 && <QtyError>Out of stock</QtyError>}
    </QtyWrapper>
  );
};

export default Quantity;

const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1rem;
`;

const QtyText = styled.div`
  margin-right: 1rem;
`;

const QtyChangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  border-radius: 4px;
  padding: 0.25rem;
`;

const QtyButton = styled(Button)`
  width: 30px;
  height: 30px;
`;

const QtyValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

const QtyError = styled.div`
  text-transform: uppercase;
  background-color: #f5222d;
  color: #fff;
  font-size: 0.75rem;
  letter-spacing: 1px;
  font-weight: 500;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;

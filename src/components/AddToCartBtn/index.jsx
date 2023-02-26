import { Button } from 'antd';
import styled from 'styled-components';

const AddToCartBtn = () => {
  return <AddToCart >Add to Cart</AddToCart>;
};

export default AddToCartBtn;

const AddToCart = styled(Button)`
  margin-top: 1rem;
`;
import React from 'react';
import {  Badge, Row, Col, Layout } from 'antd';
import { ShopOutlined , ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate()

  return (
    <Header style={{ lineHeight: '50px',  }}>
      <Row justify='center'>
        <Col span={3} style={{display:'flex', justifyContent:'center'}} >
          <Link to='/'>
          <Badge>
              <ShopOutlined
                style={{ fontSize: 40, cursor: 'pointer' }}
              />
            </Badge>
          </Link>
        </Col>
        <Col
          span={3}
          style={{display:'flex', justifyContent:'center'}}
        >
          <Link to='/cart'>
            <Badge>
              <ShoppingCartOutlined
                style={{ fontSize: 42, cursor: 'pointer' }}
              />
            </Badge>
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;

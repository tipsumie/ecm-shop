import React from 'react';
import {  Badge, Row, Col, Layout } from 'antd';
import { ShopOutlined , ShoppingCartOutlined } from '@ant-design/icons';
import {  Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
 

  return (
    <Header style={{ lineHeight: '50px',marginTop:'20px'  }}>
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
            <Badge count={7}>
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

import React from 'react';
import { Menu } from 'antd';
import { HomeFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  const onMenuClick = (item)=>{
    navigate(item.path)
  }
  return (
    <div>
       <Menu
       onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            path: "/",
          }
        ]}
      />
    </div>
  );
};

export default Header;

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
    <p> ECM Shop ©2023 Created by MM</p>
    <span>|</span>
    <a href='https://github.com/tipsumie/ecm-shop'>Source code</a>
  </FooterLayout>
  )
}

export default Footer

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e8ef;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 10px;

  & > p {
    margin-right: 0.5rem;
  }

  & > a {
    font-weight: 500;
    color: #f97316;
    margin-left: 5px;
  }
`;
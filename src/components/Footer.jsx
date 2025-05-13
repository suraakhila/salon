// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 0.8rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  a {
    color: #fff;
    font-size: 1.2rem;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      color:rgb(93, 90, 89);
      transform: scale(1.1);
    }
  }
`;

const CopyRight = styled.p`
  font-size: 0.75rem;
  color: #aaa;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </SocialIcons>
      <CopyRight>&copy; {new Date().getFullYear()} Fama Barber Shop & Beauty Salon. All rights reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;

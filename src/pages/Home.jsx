import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

// Google Fonts
const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Playfair+Display:wght@700&display=swap');
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: url('/images/hero.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  padding: 0 5%;
  font-family: 'Open Sans', sans-serif;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const HeroContent = styled(motion.div)`  /* Apply animation */
  position: relative;
  z-index: 2;
  max-width: 650px;
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 1.2rem;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  font-weight: 300;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeroButton = styled(Link)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  border: 2px solid #fff;
  color: #fff;
  background-color: transparent;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

const Homepage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <>
      <GlobalStyle />
      <HeroSection>
        <HeroOverlay />
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <HeroTitle>More than just a haircut.</HeroTitle>
          <HeroSubtitle>Come in, relax and walk out feeling like a new one.</HeroSubtitle>
          <ButtonGroup>
            <HeroButton to="/about">Know More</HeroButton>
            <HeroButton to="/contact">Book Now</HeroButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default Homepage;

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Playfair+Display:wght@700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
  }
`;

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  color: #333;
`;

const AboutTitle = styled(motion.h1)`
 font-family: 'Poppins', sans-serif;
  font-size: 2.9rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  color: #1f1f1f;
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  max-width: 850px;
  background-color: #fff;
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TypedText = styled.div`
  font-size: 1.3rem;
  color: #666;
  margin-top: 1rem;
  font-style: italic;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 280px;
  text-align: center;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  color: #222;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const About = () => {
  return (
    <>
      <GlobalStyle />
      <AboutSection>
        <AboutTitle
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </AboutTitle>

        <AboutContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AboutText>
            Welcome to our premium barber shop. We offer high-quality haircuts, shaves, and styling with a focus on customer satisfaction. Our skilled team of professionals works diligently to ensure that every visit leaves you looking sharp and feeling refreshed. Our services are tailored to fit your unique style and grooming needs, promising a personalized experience that exceeds your expectations. With a dedication to excellence, we ensure that each haircut is a perfect fit for you.
          </AboutText>

          <TypedText>
            <ReactTyped
              strings={[
                "Precision Cuts ",
                "Relaxing Atmosphere ",
                "Top-notch Grooming Products ",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </TypedText>
        </AboutContent>

        <CardContainer>
          <Card
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardImage
              src="https://images.pexels.com/photos/7697224/pexels-photo-7697224.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Barber Working"
            />
            <CardTitle>Skilled Barbers</CardTitle>
            <CardText>
              Experience precision haircuts and shaves from our trained professionals.
            </CardText>
          </Card>

          <Card
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardImage
              src="https://media.istockphoto.com/id/1923992090/photo/modern-hairdressing-and-beauty-salon-interior-with-pink-chairs-mirrors-cash-register-and.jpg?s=612x612&w=0&k=20&c=ltO5w2aOEurSuowDjfPTOkVwDG1aRATuurfaEga1fJs="
              alt="Modern Interior"
            />
            <CardTitle>Modern Interior</CardTitle>
            <CardText>
              Relax in our stylish, clean, and comfortable salon atmosphere.
            </CardText>
          </Card>

          <Card
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <CardImage
              src="https://images.pexels.com/photos/16280928/pexels-photo-16280928.jpeg"
              alt="Premium Products"
            />
            <CardTitle>Premium Products</CardTitle>
            <CardText>
              We use top-quality grooming products for a fresh and lasting look.
            </CardText>
          </Card>
        </CardContainer>
      </AboutSection>
    </>
  );
};

export default About;

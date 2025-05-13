import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // 👈 import motion

// Wrapper section
const ReviewsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  color: #333;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
`;

// Add motion to title
const ReviewsTitle = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 809;
  text-align: center;
  margin-bottom: 2rem;
  color: rgb(48, 48, 45);
  text-transform: uppercase;
`;

// Review list
const ReviewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Motion-enhanced review card
const MotionCard = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
`;

// Motion-enhanced image
const MotionProfileImage = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #f39c12;
`;

const ReviewText = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
`;

const CustomerName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.3rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Star = styled.span`
  color: ${({ filled }) => (filled ? '#f39c12' : '#ccc')};
  font-size: 1.5rem;
`;

const Reviews = () => {
  const reviewsData = [
    {
      text: '"Best barber experience I\'ve ever had. Highly recommend!"',
      name: 'John Doe',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      text: '"The service was amazing and the staff were so friendly."',
      name: 'Jane Smith',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      text: '"Amazing atmosphere and great cuts. I\'ll be back again!"',
      name: 'Mark Brown',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      text: '"Really enjoyed the service. Great place for a quick trim."',
      name: 'Emily White',
      rating: 3,
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      text: '"Professional, friendly, and talented barbers. Highly recommended!"',
      name: 'James Green',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ];

  return (
    <ReviewsSection>
      <ReviewsTitle
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Client Reviews
      </ReviewsTitle>
      <ReviewsList>
        {reviewsData.map((review, index) => (
          <MotionCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <MotionProfileImage
              src={review.image}
              alt={review.name}
              whileHover={{ scale: 1.1 }}
            />
            <ReviewText>{review.text}</ReviewText>
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < review.rating}>★</Star>
              ))}
            </StarRating>
            <CustomerName>{review.name}</CustomerName>
          </MotionCard>
        ))}
      </ReviewsList>
    </ReviewsSection>
  );
};

export default Reviews;

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
`;

const ServiceItem = styled(motion.div)`
  display: inline-block;
  margin: 1rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 250px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const ViewMoreButton = styled(motion.button)`
  background-color: #f39c12;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${ServiceItem}:hover & {
    transform: scale(1.05);
  }
`;

const ServicePrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(201, 195, 71); /* A bold red color */
  margin-top: 0.5rem;
  font-family: 'Share Tech Mono', monospace;
`;

const SectionTitle = styled(motion.h1)`
  font-size: 2.5rem;          // Adjust as needed
  font-weight: 800;           // Bold text
  color: rgb(25, 23, 23);     // Dark gray text
  text-align: center;         // Centered heading
  margin-bottom: 2rem;        // Space below heading
`;

// Motion variants
const serviceItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } }
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const servicesData = [
    {
      title: 'Haircuts',
      description: 'We offer stylish haircuts to match your personality.',
      image: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$25',
    },
    {
      title: 'Shaves',
      description: 'Relax and enjoy a professional shave experience.',
      image: 'https://images.pexels.com/photos/2014808/pexels-photo-2014808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$15',
    },
    {
      title: 'Styling',
      description: 'Our stylists will help you look your best.',
      image: 'https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$30',
    },
    {
      title: 'Facials',
      description: 'Indulge in a rejuvenating facial experience.',
      image: 'https://images.pexels.com/photos/9336035/pexels-photo-9336035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$35',
    },
    {
      title: 'Massage',
      description: 'Relax with a calming massage.',
      image: 'https://images.pexels.com/photos/27497967/pexels-photo-27497967/free-photo-of-head-massage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$40',
    },
    {
      title: 'Beard Trim',
      description: 'Get the perfect beard trim every time.',
      image: 'https://images.pexels.com/photos/7518733/pexels-photo-7518733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$18',
    },
    {
      title: 'Nail Care',
      description: 'Pamper your hands and feet with our nail care services.',
      image: 'https://images.pexels.com/photos/3997357/pexels-photo-3997357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$22',
    },
    {
      title: 'Waxing',
      description: 'Enjoy smooth, hair-free skin with our waxing services.',
      image: 'https://5.imimg.com/data5/LY/JC/JR/SELLER-110510653/body-waxing-1000x1000.jpg',
      price: '$28',
    },
  ];

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <ServicesSection>
      <SectionTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Our Premium Services
      </SectionTitle>
      <ServicesGrid>
        {servicesData.slice(0, showAll ? servicesData.length : 4).map((service, index) => (
          <ServiceItem key={index} variants={serviceItemVariants} initial="hidden" animate="visible">
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
          </ServiceItem>
        ))}
      </ServicesGrid>

      <ViewMoreButton
        onClick={handleToggleView}
        variants={buttonVariants}
        whileHover="hover"
      >
        {showAll ? 'Show Less' : 'View More'}
      </ViewMoreButton>
    </ServicesSection>
  );
};

export default Services;

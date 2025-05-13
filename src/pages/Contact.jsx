import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import axios from 'axios';

// Styled Components
const AppointmentSection = styled.section`
  min-height: 100vh;
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: rgb(33, 30, 29);
`;

const FormWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin-bottom: 3rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1.1rem;

  &:focus {
    border-color: rgb(89, 85, 85);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1.1rem;
  height: 150px;

  &:focus {
    border-color: rgb(89, 85, 85);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: rgb(158, 157, 141);
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(186, 186, 186);
    transform: scale(1.03);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;

// Styled Components
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 1rem;
  margin-top: 3rem;
`;

const InfoBox = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 280px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid #ddd;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  color:rgb(171, 205, 200);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color:rgb(178, 205, 233);
    transform: scale(1.1);
  }
`;

const Address = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  font-weight: 500;
  margin: 0;
  padding-top: 0.5rem;
`;

const TitleText = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: rgb(33, 30, 29);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    color:rgb(125, 134, 143);
    transform: translateY(-4px);
  }
`;

const SmallText = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.5rem;
`;


// Component
const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [alertMessage, setAlertMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/appointments', formData);

      if (response.status === 201 || response.data.message) {
        setAlertMessage('Appointment successfully booked!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setAlertMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setAlertMessage('There was an error. Please try again later.');
    }
  };

  return (
    <AppointmentSection>
      <Title>Book Appointment</Title>

      {alertMessage && <div>{alertMessage}</div>}

      <FormWrapper
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Form onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <TextArea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <SubmitButton type="submit">Book Now</SubmitButton>
        </Form>

      <InfoContainer>
  <InfoBox
    as={motion.div}
    whileHover={{ scale: 1.05 }}
  >
    <TitleText>Opening Hours</TitleText>
    <IconWrapper><FaClock /></IconWrapper>
    <Address>
      <strong>Monday - Friday</strong><br />
      9:00 AM - 8:00 PM<br /><br />
      <strong>Saturday</strong><br />
      9:00 AM - 6:00 PM<br /><br />
      <strong>Sunday</strong><br />
      10:00 AM - 4:00 PM
    </Address>
  </InfoBox>
<InfoBox
  as="a"
  href="mailto:support@example.com"
  whileHover={{ scale: 1.05 }}
  target="_blank"
  rel="noopener noreferrer"
>
  <TitleText>Email</TitleText>
  <IconWrapper><FaEnvelope /></IconWrapper>
  <Address>
    support@example.com<br />
    <SmallText>Reach out to us for appointments, queries, or assistance. We reply within 24 hours.</SmallText>
  </Address>
</InfoBox>

<InfoBox
  as="a"
  href="tel:+15551234567"
  whileHover={{ scale: 1.05 }}
>
  <TitleText>Phone</TitleText>
  <IconWrapper><FaPhone /></IconWrapper>
  <Address>
    +1 (555) 123-4567<br />
    <SmallText>Call us directly for urgent bookings or customer support between working hours.</SmallText>
  </Address>
</InfoBox>


  <InfoBox
    as="a"
    href="https://www.google.com/maps/search/?api=1&query=1234+Sunset+Blvd,+Los+Angeles,+CA+90026"
    whileHover={{ scale: 1.05 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <TitleText>Location</TitleText>
    <IconWrapper><FaMapMarkerAlt /></IconWrapper>
    <Address>1234 Sunset Blvd, Los Angeles, CA 90026</Address>
  </InfoBox>
</InfoContainer>


      </FormWrapper>
    </AppointmentSection>
  );
};

export default Appointment;

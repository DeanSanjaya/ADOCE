// Footer.jsx
import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      p="4"
      bg="blue.1"
      color="white"
      position="fixed"
      bottom="0"
      width="100%"
      
    >
      <Text>&copy; 2023 ADOCE</Text>
    </Flex>
  );
};

export default Footer;

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Flex, Text, Button, Link } from '@chakra-ui/react';

const Navbar = () => {
  const { pathname } = useLocation();

  const isActive = (path) => path === pathname;

  return (
    <Flex justify="space-between" p="3" pt="4" bg="blue.1">
      <Box>
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color="white" _hover={{ textDecoration: 'none'}}>
          ADOCE
        </Link>
      </Box>

      <Flex align="center" fontWeight="medium">
        <NavLink to="/" isActive={isActive} >
          Home
        </NavLink>
        <NavLink to="/adopt" isActive={isActive} >
          Adopt
        </NavLink>
        <NavLink to="/donate" isActive={isActive}>
          Donate
        </NavLink>
        <NavLink to="/about" isActive={isActive}>
          About us
        </NavLink>
        <NavLink to="/contact" isActive={isActive}>
          Contact us
        </NavLink>
      </Flex>

      <Box>
        <Link as={RouterLink} to="/login">
          <Button fontWeight="semibold" colorScheme="blue">Login</Button>
        </Link>
      </Box>
    </Flex>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link
    as={RouterLink}
    to={to}
    p="2"
    mx="2"
    fontWeight={isActive(to) ? 'medium' : 'normal'}
    color={isActive(to) ? 'white' : 'white'}
    borderBottom={isActive(to) ? '2px solid white' : 'none'}
  >
    {children}
  </Link>
);

export default Navbar;

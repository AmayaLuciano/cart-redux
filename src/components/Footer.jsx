import { Container, Divider, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Container textAlign={'center'} p={3} mt={'auto'}>
      <Divider />
      <Text color={'gray.500'} mt={2}>
        Encontrá mi Linkedin{' '}
        <Link
          color={'black'}
          href="https://www.linkedin.com/in/luciano-amaya-972504218/"
          isExternal
        >
          aca
        </Link>
      </Text>
    </Container>
  );
};

export default Footer;

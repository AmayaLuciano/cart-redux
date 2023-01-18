import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Heading,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { totalCount, totalAmount } = useSelector((state) => state.cart);
  return (
    <>
      <Flex>
        <Heading ml={3}>
          <Link to={'/'}>Simple Cart</Link>
        </Heading>
        <Button size={'lg'} mx={4} colorScheme={''}>
          <Link to={'/'}>🏠</Link>
        </Button>
        <Spacer />
        <Button size={'lg'} m={1} colorScheme="whiteAlpha" color={'black'}>
          <Link to={'/cart'}>🛒:{totalCount}</Link>
        </Button>
        {colorMode === 'dark' ? (
          <SunIcon
            cursor={'pointer'}
            boxSize="6"
            alignSelf={'center'}
            mx={2}
            onClick={toggleColorMode}
          />
        ) : (
          <MoonIcon
            color={'blackAlpha.700'}
            cursor={'pointer'}
            boxSize="6"
            alignSelf={'center'}
            mx={2}
            onClick={toggleColorMode}
          />
        )}
      </Flex>
      <Divider />
    </>
  );
};

export default NavBar;

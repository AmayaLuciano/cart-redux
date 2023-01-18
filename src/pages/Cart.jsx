import { Box, Heading, Container, Button, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductInCart from '../components/ProductInCart';
import { getTotals, clearCart } from '../reducers/cart/cartSlice';

const Cart = () => {
  const { productsList, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  dispatch(getTotals());

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {productsList.length === 0 ? (
        <Container m={'auto'}>
          <Heading>No tienes productos en el carrito</Heading>
          <Box display={'flex'}>
            <Text>
              Mejor anda a comprar algo <Link to={'/'}>🛍 ↩️</Link>{' '}
            </Text>
          </Box>
        </Container>
      ) : (
        <Container
          border={'1px'}
          borderColor="gray.400"
          rounded="md"
          m={'auto'}
        >
          {productsList.map((product) => {
            return <ProductInCart key={product.id} product={product} />;
          })}
          <Flex textAlign={'center'} p={2} justify="space-around">
            <Button onClick={handleClear} colorScheme="gray">
              Limpiar 🛒
            </Button>
            <Heading>Total: ${totalAmount}</Heading>
          </Flex>
        </Container>
      )}
    </>
  );
};

export default Cart;

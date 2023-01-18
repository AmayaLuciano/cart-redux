import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
} from '../reducers/cart/cartSlice';

const ProductInCart = ({ product }) => {
  const { productsList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDecraseQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  return (
    <Flex
      key={product.id}
      justify="space-between"
      align={'center'}
      borderBottom="1px"
      borderColor={'gray.400'}
      h="110px"
    >
      <Image boxSize={'100px'} objectFit="cover" src={product.images[1]} />

      <Text>
        <b></b> {product.title}
      </Text>
      <Text>
        <b>$</b> {product.price}
      </Text>
      {productsList.find((pdt) => pdt.id === product.id) ? (
        <Box
          display={'flex'}
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Button
            colorScheme={'blue'}
            onClick={() => handleIncrementQuantity(product.id)}
          >
            +
          </Button>
          <Text px={3}>{product.quantity}</Text>
          <Button
            onClick={() => handleDecraseQuantity(product.id)}
            colorScheme={'blue'}
          >
            -
          </Button>
        </Box>
      ) : (
        <Button
          colorScheme={'green'}
          onClick={() => handleAddOrRemoveProduct(product.id)}
        >
          Agregar
        </Button>
      )}
    </Flex>
  );
};

export default ProductInCart;

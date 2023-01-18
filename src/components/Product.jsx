import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  addProducToCart,
  removeProductFromCart,
} from '../reducers/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { productsList } = useSelector((state) => state.cart);

  const handleAddOrRemoveProduct = (productId) => {
    const product = productsList.find((product) => product.id === productId);
    if (productsList.find((product) => product.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProducToCart(product));
    }
  };
  return (
    <Card
      variant={'unstyled'}
      key={product.id}
      display="flex"
      flexDir={'column'}
    >
      <img src={product.images[1]} />
      <CardBody
        display={'flex'}
        flexDir="column"
        justifyContent={'space-between'}
      >
        <Text mt={3}>
          <b>{product.title}</b>
        </Text>
        <Text>{product.price}</Text>
        <Text color={'gray.500'}>{product.description}</Text>

        {productsList.find((pdt) => pdt.id === product.id) ? (
          <Button
            colorScheme={'red'}
            onClick={() => handleAddOrRemoveProduct(product.id)}
          >
            Eliminar
          </Button>
        ) : (
          <Button
            colorScheme={'green'}
            onClick={() => handleAddOrRemoveProduct(product.id)}
          >
            Agregar
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default Product;

import {
  Box,
  Button,
  Card,
  Image,
  SimpleGrid,
  Text,
  CardBody,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProducToCart,
  removeProductFromCart,
} from '../reducers/cart/cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.cart);

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (productsList.find((product) => product.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProducToCart(product));
    }
  };

  return (
    <>
      <SimpleGrid m={3} columns={{ md: 2, lg: 3 }} gap={3} px={8}>
        {products.map((product) => {
          return (
            <Card
              variant={'unstyled'}
              key={product.id}
              display="flex"
              flexDir={'column'}
            >
              <Image
                objectFit={'fill'}
                boxSize="350px"
                src={product.images[1]}
              />
              <CardBody
                display={'flex'}
                flexDir="column"
                justifyContent={'space-between'}
              >
                <Box>
                  <Text mt={3}>
                    <b>{product.title}</b>
                  </Text>
                  <Text>${product.price}</Text>
                </Box>
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
                    colorScheme={'messenger'}
                    onClick={() => handleAddOrRemoveProduct(product.id)}
                  >
                    Agregar
                  </Button>
                )}
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default ProductList;

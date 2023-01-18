import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <>
      <Box m={3} w={'full'}>
        <ProductList products={products} />
      </Box>
    </>
  );
};

export default Home;

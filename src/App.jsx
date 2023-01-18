import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Flex flexDir={'column'} minHeight="100vh">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Flex>
  );
};

export default App;

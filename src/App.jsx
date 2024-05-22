import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: 100,
      discount: 20,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: 200,
      discount: 10,
    },
    // Generate 100 more products
    // Start the loop from 3 since we already have 2 products
    ...Array.from({ length: 100 }, (_, index) => ({
      id: index + 3,
      image: 'https://via.placeholder.com/150',
      name: `Product ${index + 3}`,
      price: Math.floor(Math.random() * 1000) + 1,
      discount: Math.floor(Math.random() * 50) + 1,
    })),
  ];

  // ...

  return (
    <>
      <Header />
      <Flex
        px={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        py={{ base: '2rem', sm: '3rem', xl: '4rem' }}
        wrap="wrap"
        justify="center"
        gap={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        w="100%"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </Flex>
    </>
  );
}

export default App;


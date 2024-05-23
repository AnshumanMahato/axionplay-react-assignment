import { Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useCallback, useMemo, useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

function Catalogue() {
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

  const perPage = 12;
  const [currPage, setCurrPage] = useState(1);

  const { start, end, totalPages } = useMemo(() => {
    const start = (currPage - 1) * perPage;
    const end = currPage * perPage;
    const totalPages = Math.ceil(products.length / perPage);
    return { start, end, totalPages };
  }, [currPage, products.length, perPage]);

  const handlePrevClick = useCallback(() => {
    if (currPage === 1) setCurrPage(totalPages);
    else setCurrPage((curr) => curr - 1);
  }, [currPage, totalPages]);

  const handleNextClick = useCallback(() => {
    if (currPage === totalPages) setCurrPage(1);
    else setCurrPage((curr) => curr + 1);
  }, [currPage, totalPages]);

  return (
    <Flex
      as="main"
      w="100%"
      direction="column"
      gap="2rem"
      pb={{ base: '2rem', sm: '3rem', xl: '4rem' }}
    >
      <Flex
        px={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        py={{ base: '2rem', sm: '3rem', xl: '4rem' }}
        wrap="wrap"
        justify="center"
        gap={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        w="100%"
      >
        {products.slice(start, end).map((product) => (
          <Link key={product.id} to="/product/test">
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              discount={product.discount}
            />
          </Link>
        ))}
      </Flex>
      <Pagination
        currPage={currPage}
        totalPages={totalPages}
        onPrev={handlePrevClick}
        onNext={handleNextClick}
      />
    </Flex>
  );
}

export default Catalogue;

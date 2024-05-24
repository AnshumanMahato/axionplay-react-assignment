import { Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useCallback, useContext, useMemo, useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

function Catalogue() {
  const { perPage, products, productCount } = useContext(AppContext);
  const [currPage, setCurrPage] = useState(1);

  const { start, end, totalPages } = useMemo(() => {
    const start = (currPage - 1) * perPage;
    const end = currPage * perPage;
    const totalPages = Math.ceil(productCount / perPage);
    return { start, end, totalPages };
  }, [currPage, perPage, productCount]);

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
          <Link key={product.id} to={`/product/${product.slug}`}>
            <ProductCard product={product} />
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

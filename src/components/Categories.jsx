import PropTypes from 'prop-types';
import { Flex, Link } from '@chakra-ui/react';

function Categories({ isVisible }) {
  const categories = [
    'all',
    'desktop',
    'laptop',
    'notebook',
    'workstation',
    'accessories',
  ];

  const renderedCategories = categories.map((category) => (
    <li key={category}>
      <Link textTransform="capitalize">{category}</Link>
    </li>
  ));

  return (
    <nav>
      <Flex
        as="ul"
        bgColor={'gray.800'}
        px={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        py="1.5rem"
        gap={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        color={'white'}
        listStyleType="none"
        direction={['column', 'column', 'row']}
        justifyContent="flex-start"
        fontSize="1.6rem"
        align={'center'}
        display={[
          isVisible ? 'flex' : 'none',
          isVisible ? 'flex' : 'none',
          'flex',
        ]}
      >
        {renderedCategories}
      </Flex>
    </nav>
  );
}

Categories.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Categories;

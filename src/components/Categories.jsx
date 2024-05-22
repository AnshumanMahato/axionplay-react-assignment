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
        px={['2rem', '3rem', '4rem']}
        py="2rem"
        gap="2rem"
        listStyleType="none"
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
        fontSize="1.8rem"
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

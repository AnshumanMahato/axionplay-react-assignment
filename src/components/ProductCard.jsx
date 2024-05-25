import PropTypes from 'prop-types';
import { Box, Image, Badge, Text, VStack } from '@chakra-ui/react';
import formatCurrency from '../utils/formatCurrency';

const ProductCard = ({ product }) => {
  const { images, name, price, discount } = product;
  const finalPrice = price - (price * discount) / 100;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="5"
      cursor="pointer"
    >
      <Box w="250px" h="250px" overflow="hidden">
        <Image
          src={images[0]}
          alt={name}
          w={'100%'}
          boxSizing="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      <VStack align="start" mt="4">
        <Text fontWeight="bold" fontSize="2rem">
          {name}
        </Text>
        <Text fontSize="1.6rem">Price: {formatCurrency(finalPrice)}</Text>
        {discount > 0 && (
          <Badge fontSize="1.4rem" colorScheme="green">
            {discount}% off
          </Badge>
        )}
      </VStack>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
  }),
};

export default ProductCard;

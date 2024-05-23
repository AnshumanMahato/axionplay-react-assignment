import PropTypes from 'prop-types';
import { Box, Image, Badge, Text, VStack } from '@chakra-ui/react';

const ProductCard = ({ image, name, price, discount }) => {
  const finalPrice = price - (price * discount) / 100;

  return (
    <Box
      maxW={{ base: '80%' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="5"
      cursor="pointer"
      maxWidth="250px"
      w="100%"
    >
      <Image src={image} alt={name} w={'100%'} />

      <VStack align="start" mt="4">
        <Text fontWeight="bold" fontSize="2rem">
          {name}
        </Text>
        <Text fontSize="1.6rem">Price: ${finalPrice.toFixed(2)}</Text>
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

export default ProductCard;

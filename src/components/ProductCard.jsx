import PropTypes from 'prop-types';
import {
  Box,
  Image,
  Badge,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const ProductCard = ({ image, name, price, discount }) => {
  const finalPrice = price - (price * discount) / 100;
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      maxW={isMobile ? 'xs' : 'sm'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="5"
    >
      <Image src={image} alt={name} />

      <VStack align="start" mt="4">
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text fontSize="md">Price: ${finalPrice.toFixed(2)}</Text>
        {discount > 0 && <Badge colorScheme="green">{discount}% off</Badge>}
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

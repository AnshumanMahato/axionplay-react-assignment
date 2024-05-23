import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Stack,
} from '@chakra-ui/react';

const ProductDetails = () => {
  /*Testing */
  const product = {
    image: 'https://via.placeholder.com/600',
    name: 'Sample Product',
    price: 150,
    discount: 20,
    description: 'This is a detailed description of the sample product.',
  };

  const relatedProducts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Related Product 1',
      price: 100,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Related Product 2',
      price: 120,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Related Product 3',
      price: 90,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      name: 'Related Product 4',
      price: 110,
    },
  ];

  /*Testing */
  const { image, name, price, discount, description } = product;
  const finalPrice = price - (price * discount) / 100;

  return (
    <Box p={5}>
      <Box as="header" mb={10}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Product Page
        </Text>
      </Box>

      <Flex direction={{ base: 'column', md: 'row' }} mb={10}>
        <Box flex={1}>
          <Image src={image} alt={name} boxSize="100%" objectFit="cover" />
        </Box>
        <VStack flex={1} align="start" p={5} spacing={5}>
          <Text fontSize="2xl" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {description}
          </Text>
          <HStack>
            <Text fontSize="2xl" fontWeight="bold">
              Price: ${finalPrice.toFixed(2)}
            </Text>
            {discount > 0 && (
              <Badge colorScheme="green" fontSize="lg">
                {discount}% off
              </Badge>
            )}
          </HStack>
          <Button colorScheme="blue" size="lg">
            Add to Cart
          </Button>
        </VStack>
      </Flex>

      <Box as="section" mt={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>
          Related Products
        </Text>
        <Flex wrap="wrap" justify="center" gap={4}>
          {relatedProducts.map((rp) => (
            <Box
              key={rp.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              maxW={{ base: 'xs', md: 'sm' }}
              p={5}
            >
              <Image src={rp.image} alt={rp.name} />
              <VStack align="start" mt={4}>
                <Text fontWeight="bold" fontSize="lg">
                  {rp.name}
                </Text>
                <Text fontSize="md">${rp.price}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetails;

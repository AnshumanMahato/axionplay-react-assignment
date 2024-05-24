import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
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

  /*Testing */
  const { image, name, price, discount, description } = product;
  const finalPrice = price - (price * discount) / 100;

  const message = encodeURIComponent(
    'Hey, I am interested in buying [product_name]-[price].',
  );
  const phone = '918787878787';

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      mb={10}
      px={{ base: '2rem', sm: '4rem', xl: '8rem' }}
      py={{ base: '2rem', sm: '3rem', xl: '4rem' }}
      gap="4rem"
    >
      <Flex w={{ base: '100%', md: '50%' }} gap="2rem" direction="row">
        <Box flex={1}>
          <Image src={image} alt={name} boxSize="100%" objectFit="cover" />
        </Box>
        <Flex direction="column" gap="2rem" basis="10%">
          <Image src={image} alt={name} />
          <Image src={image} alt={name} />
          <Image src={image} alt={name} />
        </Flex>
      </Flex>
      <VStack flex={1} align="start" spacing={5}>
        <Text fontSize="4rem" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="1.6rem" color="gray.600">
          {description}
        </Text>
        <HStack>
          <Text fontSize="1.8rem" fontWeight="bold">
            Price: ${finalPrice.toFixed(2)}
          </Text>
          {discount > 0 && (
            <Badge colorScheme="green" fontSize="1.6rem">
              {discount}% off
            </Badge>
          )}
        </HStack>
        <Button colorScheme="blue" size="lg" fontSize="1.8rem">
          Add to Cart
        </Button>
        <Button
          as="a"
          colorScheme="green"
          size="lg"
          fontSize="1.8rem"
          href={`https://wa.me/${phone}/?text=${message}`}
        >
          Inquire on Whatsapp
        </Button>
      </VStack>
    </Flex>
  );
};

export default ProductDetails;

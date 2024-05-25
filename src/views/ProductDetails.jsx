import { Flex, Text, VStack, HStack, Button, Badge } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { useParams } from 'react-router-dom';
import ProductImages from '../components/ProductImages';
import formatCurrency from '../utils/formatCurrency';

const ProductDetails = () => {
  const { products } = useContext(AppContext);
  const { slug } = useParams();

  const product = products.find((product) => product.slug === slug);
  const { images, name, price, discount, description } = product;
  const finalPrice = price - (price * discount) / 100;

  const message = encodeURIComponent(
    `Hey, I am interested in buying ${name} - ${formatCurrency(finalPrice)}.`,
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
      <ProductImages images={images} alt={name} />
      <VStack flex={1} align="start" spacing={5}>
        <Text fontSize="4rem" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="1.6rem" color="gray.600">
          {description}
        </Text>
        <HStack>
          <Text fontSize="1.8rem" fontWeight="bold">
            Price: {formatCurrency(finalPrice)}
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

import propTypes from 'prop-types';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

function ProductImages({ images, alt }) {
  const [currentImage, setCurrentImage] = useState(0);

  const switchImage = useCallback((index) => setCurrentImage(index), []);

  return (
    <Flex w={{ base: '100%', md: '50%' }} gap="2rem" direction="row">
      <Box flex={1} aspectRatio="1/1">
        <Image
          src={images[currentImage]}
          alt={`${alt}-${currentImage}`}
          boxSize="100%"
          objectFit="cover"
        />
      </Box>
      <Flex direction="column" gap="2rem" basis="10%">
        {images.map((image, index) => {
          /* Ideally this should have been filterd using some slug or id. For simplicity, we are using index.
                But this can cause issues when the images array is updated and the index of the currentImage changes.
                That's why we are returning an empty fragment when the index matches the currentImage
           */
          if (index === currentImage) return <></>;
          return (
            <Image
              key={`${alt}-${index}`}
              src={image}
              alt={alt}
              aspectRatio="1/1"
              _hover={{ outline: '4px solid', outlineColor: 'blue.300' }}
              cursor="pointer"
              onClick={() => switchImage(index)}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

ProductImages.propTypes = {
  images: propTypes.arrayOf(propTypes.string).isRequired,
  alt: propTypes.string.isRequired,
};

export default ProductImages;

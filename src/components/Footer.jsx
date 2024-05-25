import { Box } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.100"
      width="100%"
      maxWidth="100%"
      padding={0}
      margin={0}
    >
      <Box
        width="100%"
        px={{ base: '2rem', sm: '4rem', xl: '8rem' }}
        py={{ base: '2rem', sm: '3rem', xl: '4rem' }}
        justify="center"
        align="center"
      >
        <span>© 2024 Random Store</span>
      </Box>
    </Box>
  );
}

export default Footer;

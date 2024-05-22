import { extendTheme } from '@chakra-ui/react';
import '@fontsource/holtwood-one-sc';

const theme = extendTheme({
  fonts: {
    logo: 'Holtwood One SC, sans-serif',
  },
  breakpoints: {
    base: '0px',
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;

import { Flex } from '@chakra-ui/react';
import { FaCartShopping, FaUser } from 'react-icons/fa6';
function App() {
  return (
    <>
      <Flex
        width="100%"
        p={['2rem', '3rem', '4rem']}
        justify="space-between"
        align="center"
      >
        <Flex
          fontFamily="logo"
          direction="column"
          justify="center"
          align="center"
          fontSize="2rem"
          lineHeight={1}
        >
          <span>Tech</span>
          <span>Town</span>
        </Flex>
        <Flex
          gap="2rem"
          align="center"
          justify="space-between"
          fontSize="2.5rem"
        >
          <FaCartShopping />
          <FaUser />
        </Flex>
      </Flex>
    </>
  );
}

export default App;


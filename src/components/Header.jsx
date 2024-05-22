import { Container, Flex, Link } from '@chakra-ui/react';
import { FaCartShopping, FaUser } from 'react-icons/fa6';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Categories from './Categories';
import { useState } from 'react';

function Header() {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  return (
    <Container
      as="header"
      bg="gray.100"
      width="100%"
      maxWidth="100%"
      padding={0}
      margin={0}
    >
      <Flex
        width="100%"
        px={['2rem', '3rem', '4rem']}
        py={{ base: '2rem', sm: '2.5rem' }}
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
        <Flex gap="2rem" align="center" justify="space-between" fontSize="2rem">
          <Link href="#">
            <FaCartShopping className="icon" />
          </Link>
          <Link href="#">
            <FaUser className="icon" />
          </Link>
          <HiOutlineMenuAlt3
            className="icon"
            id="menu_icon"
            onClick={() => setIsCategoriesVisible((curr) => !curr)}
          />
        </Flex>
      </Flex>
      <Categories isVisible={isCategoriesVisible} />
    </Container>
  );
}

export default Header;

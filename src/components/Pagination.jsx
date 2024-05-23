import PropTypes from 'prop-types';
import { Button, Flex } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function Pagination({
  currPage,
  totalPages,
  onPrev: handlePrevClick,
  onNext: handleNextClick,
}) {
  return (
    <Flex justify="center" align="center" gap="2rem" fontSize="1.8rem">
      <Button onClick={handlePrevClick}>
        <AiOutlineArrowLeft />
      </Button>
      <div>
        Page {currPage} of {totalPages}
      </div>
      <Button onClick={handleNextClick}>
        <AiOutlineArrowRight />
      </Button>
    </Flex>
  );
}

Pagination.propTypes = {
  currPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Pagination;

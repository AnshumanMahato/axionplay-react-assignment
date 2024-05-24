import { createContext } from 'react';
import PropTypes from 'prop-types';
import products from '../data/products';

const AppContext = createContext({ products: [], productCount: 0, perPage: 0 });

const AppProvider = ({ children }) => {
  const values = {
    products,
    productCount: products.length,
    perPage: 12,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };

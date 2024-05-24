import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './views/RootLayout';
import Catalogue from './views/Catalogue';
import ProductDetails from './views/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Catalogue /> },
      { path: '/product/:slug', element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


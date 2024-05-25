import { RouterProvider, createHashRouter } from 'react-router-dom';
import RootLayout from './views/RootLayout';
import Catalogue from './views/Catalogue';
import ProductDetails from './views/ProductDetails';

// Using hash router instead of browser router to avoid 404 error on page refresh on ghpages.
// Vercel and netlify will work fine with browser router"
const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <Catalogue /> },
      { path: 'product/:slug', element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


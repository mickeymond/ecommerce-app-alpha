import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./pages/login";
import Register from "./pages/register";
import Catalogue from "./pages/catalogue";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Profile from './pages/profile';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/catalogue', element: <Catalogue /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/profile', element: <Profile /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
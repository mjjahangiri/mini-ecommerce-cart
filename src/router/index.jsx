import { createBrowserRouter } from "react-router-dom";
import ProductsList from "../pages/ProductsList";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  { path: "/", element: <ProductsList /> },
  { path: "/cart", element: <Cart /> },
]);

export default router;

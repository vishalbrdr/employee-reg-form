import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";

/**
 * Create a browser router with the following routes:
 * - `/` renders the `App` component
 * - `/login` renders the `Login` component
 * - Any other path should render a `404` component
 */

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export { router };

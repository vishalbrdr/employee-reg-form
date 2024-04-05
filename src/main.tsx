import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);

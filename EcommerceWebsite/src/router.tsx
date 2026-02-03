import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import Home from "./Pages/homePage";
import Products from "./Pages/productsPage";
import About from "./Pages/aboutUsPage";
import Basket from "./Pages/basketPage";
import Support from "./Pages/supportPage";
import Settings from "./Pages/settingsPage";
import Profile from "./Pages/productsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "settings", element: <Settings /> },
      { path: "home", element: <Home /> },
      { path: "basket", element: <Basket /> },
      { path: "support", element: <Support /> },
      { path: "profile", element: <Profile /> },




    ],
  },
]);

export default router;
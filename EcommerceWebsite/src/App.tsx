import "./App.css";
import NavBar from "./Components/navBar";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/homePage";
import Products from "./Pages/productsPage";
import About from "./Pages/aboutUsPage";
import Basket from "./Pages/basketPage";
import Support from "./Pages/supportPage";
import Settings from "./Pages/settingsPage";
import Profile from "./Pages/profilePage";


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </>
  );
}

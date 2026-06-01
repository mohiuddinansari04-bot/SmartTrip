import Nav from "./Component/Nav";
import Slider from "./Component/Slider.jsx";
import Footer from "./Component/Footer.jsx";
import Cards from "./Component/Cards.jsx";
import Btn from "./Component/Btn.jsx";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Hero/Home";
import About from "./Hero/About";
import Contact from "./Hero/Contact";
import Layout from "./Component/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Slider />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

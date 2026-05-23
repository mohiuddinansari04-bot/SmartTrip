import Nav from './Component/Nav';
import Slider from './Component/Slider.jsx'
import Siderbar from './Component/Siderbar.jsx'
import Footer from './Component/Footer.jsx'
import Cards from './Component/Cards.jsx'
import Btn from './Component/Btn.jsx'

import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Hero/Home';
import About from './Hero/About';
import Contact from './Hero/Contact';






function App() {
  


  return (
    <>
      <Nav />

      <Routes>

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Slider />
      <Siderbar />
      <Cards />
      <Btn />
      <Footer />



    </>
  )
}

export default App;

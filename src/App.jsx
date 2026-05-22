import Nav from './Component/Nav';
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
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>



    </>
  )
}

export default App;

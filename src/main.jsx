import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './Component/Nav.jsx'
import Slider from './Component/Slider.jsx'
import Siderbar from './Component/Siderbar.jsx'
import Footer from './Component/Footer.jsx'
import Cards from './Component/Cards.jsx'
import Btn from './Component/Btn.jsx'
import Login from './Login.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Nav />
    <Slider />
    <Siderbar />
    <Cards />
    <Btn />
    <Footer />
    <Login />
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}

  </StrictMode>
)

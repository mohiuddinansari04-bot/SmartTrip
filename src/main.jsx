import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Slider from './Component/Slider.jsx'
import Siderbar from './Component/Siderbar.jsx'
import Footer from './Component/Footer.jsx'
import Cards from './Component/Cards.jsx'
import Btn from './Component/Btn.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <Slider />
    <Siderbar />
    <Cards />
    <Btn />
    <Footer />
  </StrictMode>



)

import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Cards from "./Cards";

function Layout(){
  return(

  
  <>
  <Nav/>
  <Outlet/>
  <Footer/>
  </>
  )
}
export default Layout;
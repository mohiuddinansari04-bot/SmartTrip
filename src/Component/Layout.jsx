import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Cards from "./Cards";

function Layout(){
  return(

  
  <>
  <main className="">
  <Nav />
  </main>
  <Outlet/>
  <Footer/>
  </>
  )
}
export default Layout;
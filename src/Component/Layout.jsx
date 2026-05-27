import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Cards from "./Cards";

function Layout(){
  return(

  
  <>
  <div className="flex flex-col min-h-screen">
  <main className="">
  <Nav />
  </main>
  <div className="flex-grow">
  <Outlet/>
  </div>
  <Footer/>
  </div>
  </>
  )
}
export default Layout;
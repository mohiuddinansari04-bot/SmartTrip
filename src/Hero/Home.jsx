import React from "react";
import { Navigate } from "react-router-dom";
const Home = (nav) =>{
   const nav =Navigate();
  return(
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page component.</p>
    </div>
  )
}

export default Home;
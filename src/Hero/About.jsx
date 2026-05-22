// import react from "react";
// import { Navigate } from "react-router-dom";
// const About =()=>{

//   const Nav =Navigate();
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is a simple about page component.</p>
//     </div>
//   )
// }
// export default About;
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const nav = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <p>know more about us</p>
    </div>
  );
};

export default About;
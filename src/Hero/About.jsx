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
      <h1 className="font-bold text-3xl flex justify-around text-">About us </h1>
      <div>
        
      </div>
    </div>
  );
};

export default About;
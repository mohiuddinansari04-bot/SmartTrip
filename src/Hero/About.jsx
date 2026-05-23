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
      <h1 className="font-bold text-3xl flex justify-around text-">
        About us
      </h1>

      {/*container */}
      <div className=" max-w-3xl border-2 mt-5 mb-5">
        <h1></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis hic harum fugiat itaque dolor error expedita rerum asperiores numquam. Officiis asperiores quo magnam! Ex pariatur hic perspiciatis, veritatis expedita neque!</p>

      </div>
    </div>
  );
};

export default About;

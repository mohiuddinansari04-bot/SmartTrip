import React from "react";
import {useNavigate} from "react-router-dom";
const Contact =()=>{
  const Nav = useNavigate();
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is a simple contact page component.</p>
      
    </div>
  )
}
export default Contact;
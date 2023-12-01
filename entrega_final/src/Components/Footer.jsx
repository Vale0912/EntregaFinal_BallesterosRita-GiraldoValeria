import React, { useState, useContext } from "react";

import { ContextGlobal } from "../Components/utils/global.context";


const Footer = () => { 
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const themeClass = theme === "light" ? "light" : "dark";



  




  return (
    <footer className={themeClass}>
        <p>Powered by</p>
        <img src="./src/images/DH.png" alt='DH-logo' />
        <div className='icons'> 
          <div className='icons'><i className="fa-brands fa-square-instagram"></i></div>
          <div className='icons'><i className="fa-brands fa-square-facebook"></i></div>
          <div className='icons'> <i className="fa-brands fa-square-whatsapp"></i></div>
          <div className='icons'><i className="fa-brands fa-tiktok"></i></div>
          
         
          
        </div>
    </footer>
  )
}

export default Footer

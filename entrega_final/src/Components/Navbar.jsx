import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  console.log("Context State", state);

  const themeClass = state.theme === "light" ? "light" : "dark";

  return (
    <nav className={themeClass}>
      <div className="navegador">
        <Link to="/Home">Home</Link>
        
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;

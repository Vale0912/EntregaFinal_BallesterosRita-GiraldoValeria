
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Components/utils/global.context';
import doctorImage from "../images/doctor.jpg";

const Card = ({ dentist, addToFavorites }) => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const themeClass = theme === "light" ? "light" : "dark";

  return (
    <div className={`card ${themeClass}`}>
      <img src={doctorImage} alt="Doctor" />
      <p>Nombre: {dentist.name}</p>
      <p>Nombre de usuario: {dentist.username}</p>
      <p>ID: {dentist.id}</p>
      <button onClick={() => addToFavorites(dentist.id)} className="favButton">
        Agregar a favoritos
      </button>
      <Link to={`/detail/${dentist.id}`}>Ver detalles</Link>

    </div>
  );
};

export default Card;





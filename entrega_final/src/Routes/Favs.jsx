
import React, { useContext, useEffect } from "react";
import { ContextGlobal } from '../Components/utils/global.context';
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  // Obtener favoritos desde localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Aplicar clases de estilo condicional según el tema
  const themeClass = theme === "light" ? "light" : "dark";

  // Mostrar un mensaje si no hay dentistas favoritos
  if (favorites.length === 0) {
    return (
      <div className={` ${themeClass}`}>
        <p >No hay dentistas favoritos.</p>
      </div>
    );
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${themeClass}`}>
        {/* Mapear la lista de dentistas favoritos y renderizar una Card por cada uno */}
        {favorites.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Favs;



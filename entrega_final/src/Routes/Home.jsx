
import React, { useContext, useEffect } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { data, theme } = state;
   // Aplicar clases de estilo condicional según el tema
   const themeClass = theme === "light" ? 'light' : 'dark';

  // Llamada a la API 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const newData = await response.json();
        dispatch({ type: "SET_DATA", payload: newData });
      } catch (error) {
        console.error("Error al obtener datos de los dentistas:", error);
      }
    };

    fetchData();
  }, [dispatch]);



  // Función para agregar un dentista a favoritos (localStorage)
  const addToFavorites = (dentistId) => {


      // Encontrar el dentista por ID
      const dentistToAdd = data.find(dentist => dentist.id === dentistId);


    // Verificar si el dentista ya está en favoritos
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = favorites.some(favorite => favorite.id === dentistId);


    if (!isAlreadyFavorite) {
      // Actualizar la propiedad isFavorite
      dentistToAdd.isFavorite = true;

      // Actualizar el estado con el nuevo dentista favorito
      dispatch({ type: "SET_DATA", payload: [...data] });

      // Mostrar alerta
      alert(`${dentistToAdd.name} ha sido agregado a Favoritos`);

      // Guardar en localStorage
      localStorage.setItem("favorites", JSON.stringify([...favorites, dentistToAdd]));
    } else {
      // Mostrar alerta indicando que ya está en favoritos
      alert(`${dentistToAdd.name} ya está en tus Favoritos`);
    }
  };

 

  return (
    <main className={themeClass}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Mapear la lista de dentistas y renderizar una Card por cada uno */}
        {data.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} addToFavorites={addToFavorites} />
        ))}
      </div>
    </main>
  );
};

export default Home;





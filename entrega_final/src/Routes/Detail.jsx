import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const themeClass = theme === 'light' ? 'light' : 'dark';

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Error en los detalles del dentista');
        }
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        setError(error.message);
      }

      
    };

    fetchDentist();
  }, [id]);

  return (
    <div className={themeClass}>
      {error && <p>Error al obtener los detalles del dentista: {error}</p>}
      {dentist && (
        <>
         
          <form><h2>Detalle del dentista {id}</h2>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        
  
          </form>
          
        </>
      )}
    </div>
  );
};

export default Detail;

import React, { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const themeClass = theme === "light" ? "light" : "dark";

  console.log("Theme Class in Form", themeClass);
  console.log("ThemeClass in Form.jsx:", themeClass);

  const handleNombreChange = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
    setNombreValido(/^[A-Za-z]+$/i.test(nuevoNombre) && nuevoNombre.trim().length >= 5);
  };

  const handleEmailChange = (e) => {
    const nuevoEmail = e.target.value;
    setEmail(nuevoEmail);
    setEmailValido(
      nuevoEmail === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(nuevoEmail),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreValido) {
      if (emailValido)
        alert(`Gracias ${nombre} te contactaremos cuando antes vía mail`);
      else alert("Ingresar email valido");
    } else alert("El nombre debe tener mínimo 5 letras, no números");
  };

  return (
    <div className={themeClass}>
      <form  onSubmit={handleSubmit}>
        <label className="btsubmit">Nombre</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />
        <label className="btsubmit" >Email</label>
        <input
          type="email"
          placeholder="Ingresa el email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input className="btsubmit" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;

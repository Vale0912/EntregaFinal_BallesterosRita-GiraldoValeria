import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';


const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const themeClass = theme === "light" ? "light" : "dark";

  console.log("Theme Class in Form", themeClass);
  console.log("ThemeClass in Form.jsx:", themeClass)

  return (
    <div >
      <h2 className={themeClass}>Want to know more?</h2>
      <p className={themeClass}>Send us your questions, and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;

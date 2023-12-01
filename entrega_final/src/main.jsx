import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./Components/utils/global.context";
import App from "./App.jsx";
import "./index.css";
import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail.jsx";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
        
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="favs" element={<Favs />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

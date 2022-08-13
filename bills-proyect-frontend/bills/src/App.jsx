//import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import RoutesApp from "./routes/RoutesApp";
import NavBarApp from "./components/NavBarApp";
import React from "react";
import FooterApp from "./components/Footer";
import HomeApp from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBarApp />
      <HomeApp />
      <FooterApp />
    </BrowserRouter>
  );
}

export default App;

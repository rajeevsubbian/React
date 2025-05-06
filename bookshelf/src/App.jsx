import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;

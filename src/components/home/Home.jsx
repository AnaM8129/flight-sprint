import React from "react";
import "./home.scss";
import Image from "./Image.jsx";
import FormSearch from "./FormSearch";
import PagoSeguro from "../pagoSeguro/PagoSeguro";
import Services from "../disponibleServices/Services";

const Home = () => {
  return (
    <>
      <main className="main-container">
        <FormSearch />
        <Image />
      </main>
      <PagoSeguro />
      <Services />
    </>
  );
};

export default Home;

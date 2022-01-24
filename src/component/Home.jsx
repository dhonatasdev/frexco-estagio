import React from "react";
import Frutas from "./Frutas";

const Home = () => {
  return (

    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://media-public.canva.com/MAC1OueuvwQ/1/thumbnail_large-1.jpg" className="card-img" alt="Background" height="500px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">FRUTAS DA ESTAÇÃO</h5>
          </div>
        </div>
      </div>
      <Frutas />
    </div>
  );
};

export default Home;

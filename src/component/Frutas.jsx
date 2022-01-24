import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Frutas = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://MadHauntingTelephones.josedhonatas.repl.co/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const MostraFrutas = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>Todas frutas</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data.filter((x)=>x.order === "Rosales"))}>Ordem Rosales</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data.filter((x)=>x.order !== "Rosales"))}>Outras ordens</button>
        </div>
        {filter.map((fruta) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={fruta.id}>
                  <img src={fruta.imagem} class="card-img-top" alt={fruta.name} height="250px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{fruta.name}</h5>
                    <p class="card-text lead fw-bold">
                      Ordem: {fruta.order}
                    </p>
                    <NavLink to={`/frutas/${fruta.id}`} class="btn btn-outline-dark">
                      Compre agora
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Nossos Produtos</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {<MostraFrutas />}
        </div>
      </div>
    </div>
  );
};

export default Frutas;

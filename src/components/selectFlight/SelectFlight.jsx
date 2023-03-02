import React, { useEffect, useState } from "react";
import "./select.scss";
import { getData } from "../../services/localStorage";
import briefcase from "../../assets/icons/briefcase.svg";
import { getOptions } from "../../services/options.js";
import { Link } from "react-router-dom";

const SelectFlight = () => {
  const [listOptions, setListOptions] = useState([]);
  // const [option, setOption] = useState({});
  const data = getData();
  const object = data[data.length - 1];

  const getOptionsFunction = async () => {
    const response = await getOptions();
    setListOptions(response);
  };
  useEffect(() => {
    getOptionsFunction();
  }, []);

  // // const selectObject = async () => {
  //   const response = await getOptions();
  //   setOption(response);
  // };
  const selectHour = () => {
    getOptionsFunction();
  };
  return (
    <main className="main-select">
      <aside className="aside-select">
        <h3 className="reservation">Tu reservación</h3>
        <section className="search-information">
          <div className="container-one">
            <p className="text-titles">Pasajeros</p>
            <p className="text">{object.passangers}</p>
          </div>
          <p className="text-titles">Vuelo de salida</p>
          <div className="container">
            <p className="date">{object.origin}</p>
            <span>----</span>
            <p className="date">{object.goBack}</p>
          </div>
          <p className="text-titles">Horarios</p>
          <div className="container">
            <p className="text">{object.dateCome}</p>
            <p className="text">{object.dateGo}</p>
          </div>
        </section>
        <button className="button-seats">Seleccionar asientos</button>
      </aside>
      <section className="section-container">
        <div className="container-first">
          <h3>Vuelo de Salida</h3>
          <Link to="/" className="button-home">
            Cambiar vuelo
          </Link>
        </div>
        <p className="reservation">Selección de horarios y equipajes</p>
        {listOptions.map((item, index) => (
          <div key={index} className="options-container" onClick={selectHour}>
            <div className="container-hour">
              <span className="hour">{item.hourGo}</span>
              <div className="center-container">
                <span className="text-titles">{item.duration}</span>
                <span className="hour">---------</span>
                <span className="text-titles">{item.type}</span>
              </div>
              <span className="hour">{item.hourCome}</span>
            </div>
          </div>
        ))}
        <section className="buttons-container">
          <button className="button-briefcase">
            <img
              className="button-briefcase__img"
              src={briefcase}
              alt="maleta icon"
            />
            <span className="button-briefcase__description">
              Un objeto personal
            </span>
            <span className="button-briefcase__price">50,000$</span>
          </button>
          <button className="button-briefcase">
            <img
              className="button-briefcase__img"
              src={briefcase}
              alt="maleta icon"
            />
            <span className="button-briefcase__description">
              Equipaje de mano
            </span>
            <span className="button-briefcase__price">100,000$</span>
          </button>
          <button className="button-briefcase">
            <img
              className="button-briefcase__img"
              src={briefcase}
              alt="maleta icon"
            />
            <span className="button-briefcase__description">
              Equipaje de 25kg
            </span>
            <span className="button-briefcase__price">200,000$</span>
          </button>
        </section>
      </section>
    </main>
  );
};

export default SelectFlight;

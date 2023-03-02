import React, { useEffect } from "react";
import { useState } from "react";
import calendar from "../../assets/icons/calendar.svg";
import plane from "../../assets/icons/planeButton.svg";
import DateGo from "./modals/DateGo";
import GoBack from "./modals/GoBack";
import Origin from "./modals/Origin";
import Type from "./modals/Type";
import DateCome from "./modals/DateCome";
import Passangers from "./modals/Passangers";
import Discount from "./modals/Discount";
import { saveData } from "../../services/localStorage";
import SelectFlight from "../selectFlight/SelectFlight";
import { Link } from "react-router-dom";
const FormSearch = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);

  // const calendar = JSON.parse(localStorage.getItem("date")) || [];
  // console.log(calendar);

  const [form, setForm] = useState({
    type: "",
    origin: "",
    goBack: "",
    dateGo: " ",
    dateCome: " ",
    passangers: 1,
    discount: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(form);
  };

  const reduce = () => {
    let reducer = form.passangers > 1 ? form.passangers - 1 : 1;
    setForm({ ...form, passangers: reducer });
  };

  const add = () => {
    let adder = form.passangers + 1;
    setForm({ ...form, passangers: adder });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(form);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const handleModal3 = () => {
    setShowModal3(!showModal3);
  };

  const handleModal4 = () => {
    setShowModal4(!showModal4);
  };

  const handleModal5 = () => {
    setShowModal5(!showModal5);
  };

  const handleModal6 = () => {
    setShowModal6(!showModal6);
  };

  const handleModal7 = () => {
    setShowModal7(!showModal7);
  };
  return (
    <>
      <form>
        <Type
          type="checkbox"
          valueR="Viaje redondo"
          valueS="Viaje sencillo"
          name="type"
          onChange={(e) => {
            handleChange(e);
          }}
          show={showModal3}
          handleClose={handleModal3}
        />
        <Origin
          value={form.origin}
          onChange={(e) => {
            handleChange(e);
          }}
          name="origin"
          show={showModal}
          handleClose={handleModal}
        />
        <GoBack
          value={form.goBack}
          onChange={(e) => {
            handleChange(e);
          }}
          name="goBack"
          show={showModal2}
          handleClose={handleModal2}
        />
        <DateGo
          value={form.dateGo}
          onChange={(e) => {
            handleChange(e);
          }}
          name="dateGo"
          show={showModal4}
          handleClose={handleModal4}
        />
        <DateCome
          value={form.dateCome}
          onChange={(e) => {
            handleChange(e);
          }}
          name="dateCome"
          show={showModal5}
          handleClose={handleModal5}
        />
        <Passangers
          value={form.passangers}
          reduce={reduce}
          add={add}
          name="passangers"
          show={showModal6}
          handleClose={handleModal6}
        />
        <Discount
          value={form.discount}
          onChange={(e) => {
            handleChange(e);
          }}
          name="discount"
          show={showModal7}
          handleClose={handleModal7}
        />
      </form>

      <section className="main-container__form-container">
        <div>
          <h1 className="main-container__title">
            Busca un nuevo destino y comienza la aventura.
          </h1>
          <p className="main-container__text">
            Descubre vuelos al mejor precio y perfectos para cualquier viaje.
          </p>
        </div>
        <p className="type-container" onClick={handleModal3}>
          Tipo de viaje:
          <span>{form.type}</span>
        </p>
        <aside className="aside-form">
          <div className="origin-container" onClick={handleModal}>
            <p className="origin-container-title">{form.origin}</p>
            <p className="origin-container-text">Origen</p>
          </div>

          <div className="origin-container" onClick={handleModal2}>
            <p className="origin-container-title">{form.goBack}</p>
            <p className="origin-container-text">Seleccione un destino</p>
          </div>
        </aside>
        <aside className="aside-date">
          <div className="date-container" onClick={handleModal4}>
            <figure className="date-container__figure">
              <img
                className="date-container__figure-img"
                src={calendar}
                alt="calendario icon"
              />
            </figure>
            <div className="date-container__div">
              <p className="date-container__div-date">{form.dateGo}</p>
              <p className="date-container__div-salida">Salida</p>
            </div>
          </div>
          <div className="date-container" onClick={handleModal5}>
            <figure className="date-container__figure">
              <img
                className="date-container__figure-img"
                src={calendar}
                alt="calendario icon"
              />
            </figure>
            <div className="date-container__div">
              <p className="date-container__div-date">{form.dateCome}</p>
              <p className="date-container__div-salida">Regreso</p>
            </div>
          </div>
        </aside>
        <aside className="aside-passengers">
          <div className="passangers-container" onClick={handleModal6}>
            <p className="passangers-container__passangers">Pasajeros:</p>
            <p className="passangers-container__number">{form.passangers}</p>
          </div>
          <div className="discount-container" onClick={handleModal7}>
            <p className="discount-container__title">
              ¿Tienes un código de promoción?
            </p>
            <p>{form.discount}</p>
          </div>
        </aside>
        <button
          className="submit-button"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <img className="submit-button__img" src={plane} alt="plane icon" />
          <Link className="submit-button__link" to="/select">
            Buscar vuelos
          </Link>
        </button>
      </section>
    </>
  );
};

export default FormSearch;

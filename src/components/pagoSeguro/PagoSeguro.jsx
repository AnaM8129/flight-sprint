import React from "react";
import amex from "../../assets/icons/Amex.svg";
import paypal from "../../assets/icons/paypal.svg";
import "./pagoSeguro.scss";
import invex from "../../assets/icons/invex.jpg";
import mastercard from "../../assets/icons/Mastercard.svg";
import visa from "../../assets/icons/Visa.svg";
import oxxo from "../../assets/icons/oxxo.svg";
import seven from "../../assets/icons/7-eleven.svg";
import walmart from "../../assets/icons/walmart.svg";
import farmacia from "../../assets/icons/farmacias.svg";

const PagoSeguro = () => {
  return (
    <aside className="aside">
      <h2 className="aside-title">Pago seguro</h2>
      <section className="section">
        <article className="asideOne">
          <p>Tarjeta de crédito, tarjeta de débito y pago electrónico.</p>
          <div className="asideOne__container-img">
            <img
              className="asideOne__container-img__item"
              src={amex}
              alt="icon Amex"
            />
            <img
              className="asideOne__container-img__item"
              src={paypal}
              alt="icon Paypal"
            />
            <img
              className="asideOne__container-img__item"
              src={invex}
              alt="icon Amex"
            />
            <img
              className="asideOne__container-img__item"
              src={mastercard}
              alt="icon Mastercard"
            />
            <img
              className="asideOne__container-img__item"
              src={visa}
              alt="icon Visa"
            />
          </div>
        </article>
        <article className="asideTwo">
          <p>Efectivo en cualquiera de las sucursales principales.</p>
          <div className="asideTwo__container-img">
            <img
              className="asideTwo__container-img__item"
              src={oxxo}
              alt="icon Oxxo"
            />
            <img
              className="asideTwo__container-img__item"
              src={seven}
              alt="icon Oxxo"
            />
            <img
              className="asideTwo__container-img__item"
              src={walmart}
              alt="icon Walmart"
            />
            <img
              className="asideTwo__container-img__item"
              src={farmacia}
              alt="icon Farmacias"
            />
          </div>
        </article>
      </section>
    </aside>
  );
};

export default PagoSeguro;

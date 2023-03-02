import React from "react";
import "./services.scss";
import car from "../../assets/icons/car.svg";
import plane from "../../assets/icons/plane.svg";
import group from "../../assets/icons/group.svg";
import hotel from "../../assets/icons/hotel.svg";
import box from "../../assets/icons/box.svg";

const Services = () => {
  const services = [
    {
      img: car,
      title: "Transporte",
      description: "Renta un auto y reserva un shuttie.",
    },
    {
      img: plane,
      title: "Vuelos + Hoteles",
      description: "Encuentra las mejores ofertas para tu viaje.",
    },
    {
      img: group,
      title: "Gupos",
      description: "Obtén una cotización para grupos de más de 9 personas.",
    },
    {
      img: hotel,
      title: "Gupos",
      description: "Reserva cualquier habitación en cualquier parte del mundo.",
    },
    {
      img: box,
      title: "Carga",
      description: "Contamos con servicio de carga y mensajería.",
    },
  ];
  return (
    <section className="section-services">
      <h2 className="section-services__title">Servicios</h2>
      <aside className="container-cards">
        {services.map((item, index) => (
          <article key={index} className="card-services">
            <figure className="card-services__figure">
              <img src={item.img} className="card-services__figure-img" />
            </figure>
            <h5 className="card-services__title">{item.title}</h5>
            <p className="card-services__description">{item.description}</p>
          </article>
        ))}
      </aside>
    </section>
  );
};

export default Services;

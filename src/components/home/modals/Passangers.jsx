import React from "react";
import { Modal } from "react-bootstrap";

const Passangers = ({ reduce, add, value, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered="boolean">
      <Modal.Header>
        <Modal.Title>Seleccione la cantidad de pasajeros</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="counter-container">
          <button className="counter-container__button" onClick={reduce}>
            -
          </button>
          <div className="counter-container__value">{value}</div>
          <button className="counter-container__button" onClick={add}>
            +
          </button>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonSave" onClick={handleClose}>
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Passangers;

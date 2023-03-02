import React from "react";
import { Modal } from "react-bootstrap";

const DateCome = ({ value, onChange, name, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered="boolean">
      <Modal.Header>
        <Modal.Title>¿Cuál es la fecha de regreso?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          value={value}
          onChange={onChange}
          name={name}
          type="date"
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonSave" onClick={handleClose}>
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DateCome;

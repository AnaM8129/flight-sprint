import React from "react";
import { Modal } from "react-bootstrap";

const Discount = ({ value, onChange, name, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered="boolean">
      <Modal.Header>
        <Modal.Title>Escribe tu código</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          name={name}
          onChange={onChange}
          placeholder="e.j 000A00"
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

export default Discount;

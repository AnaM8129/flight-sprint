import React from "react";
import { Modal } from "react-bootstrap";

const Type = ({ valueR, valueS, onChange, name, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered="boolean">
      <Modal.Header>
        <Modal.Title>¿Qué tipo prefieres?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-radio">
          <input type="radio" value={valueR} name={name} onChange={onChange} />
          Viaje redondo
        </div>
        <br />
        <div className="input-radio">
          <input type="radio" value={valueS} name={name} onChange={onChange} />
          Viaje sencillo
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonSave" onClick={handleClose}>
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Type;

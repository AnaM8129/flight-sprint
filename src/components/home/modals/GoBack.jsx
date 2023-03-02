import "../modals/modals.scss";
import { Modal } from "react-bootstrap";

const GoBack = ({ value, onChange, name, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered="boolean">
      <Modal.Header>
        <Modal.Title>¿A dónde viajas?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <select
          className="modal-container__select"
          value={value}
          onChange={onChange}
          name={name}
        >
          <option>Seleccione un lugar</option>
          <option>Cartagena</option>
          <option>Bogota</option>
          <option>Medellín</option>
          <option>Santa Marta</option>
          <option>Cali</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <button className="buttonSave" onClick={handleClose}>
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default GoBack;

import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Calendar } from "react-date-range";

const DateGo = ({ value, onChange, name, show, handleClose }) => {
  // const [calendar, setCalendar] = useState("");

  // const handleSelect = (date) => {
  //   setCalendar(format(date, "MM/dd/yyyy"));
  //   console.log(date);
  //   localStorage.setItem("date", JSON.stringify(calendar));
  // };

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered="boolean">
      <Modal.Header>
        <Modal.Title>¿Cuál es la fecha de salida?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Calendar date={new Date()} onChange={handleSelect} />
        <Calendar date={new Date()} onChange={handleSelect} /> */}
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

export default DateGo;

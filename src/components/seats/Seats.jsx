import React from "react";
import { Modal } from "react-bootstrap";

const Seats = () => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Selecciona tus asientos</Modal.Title>
        <Modal.Body>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default Seats;

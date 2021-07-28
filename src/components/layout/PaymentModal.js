import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PaymentModal(props) {
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm payment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please confirm your payment.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={props.onConfirm} variant="primary">
          Confirm payment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentModal;

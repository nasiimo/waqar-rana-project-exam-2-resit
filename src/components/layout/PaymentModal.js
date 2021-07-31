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
        <Button className="cancel-payment" onClick={props.onHide}>
          Close
        </Button>
        <Button className="confirm-payment" onClick={props.onConfirm}>
          Confirm payment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentModal;

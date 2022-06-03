import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Popup({ decks, setDecks }) {
  const [show, setShow] = useState(false);

  const handleCancel = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteTrue = (idToDelete) => {
    setDecks((currentDecks) => {
      currentDecks.filter((deck) => deck.id !== idToDelete);
    });
  };

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleCancel}
        handleDeleteTrue={handleDeleteTrue}
      >
        <Modal.Body>
          <p>Delete this deck?</p>
          <p>You will not be able to recover it.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDeleteTrue}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

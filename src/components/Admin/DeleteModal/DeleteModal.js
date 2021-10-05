import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ show, handleShow }) {
  // console.log(show);
  return (
    <>
      <Modal
        show={show.open}
        onHide={() => {
          handleShow((prev) => ({
            ...prev,
            open: false,
          }));
        }}
      >
        <Modal.Header>
          <Modal.Title>Delete user: {show.data?.username} </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span className="text-danger">This action is permanent.</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleShow((prev) => ({
                ...prev,
                deleted: true,
                open: false,
              }));
            }}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleShow((prev) => ({
                ...prev,
                open: false,
              }));
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;

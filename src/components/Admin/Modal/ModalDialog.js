import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function ModalDialog(props) {
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={() => !props.showModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Delete skill: {props.skill.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {" "}
          <span>This action is permanent.</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => props.handleModal(!props.showModal)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={() => props.handleDeleteItem(true)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;

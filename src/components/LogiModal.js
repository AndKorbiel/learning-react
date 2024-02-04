import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { LoginForm } from './LoginForm';

export const LoginModal = ({ variant }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={variant ?? 'primary'} onClick={handleShow}>
        Click to Log in
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Please fill all necessary data to login</p>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

import { useState } from 'react';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const useShowUserData = () => {
  const [show, setShow] = useState(false);
  const { userEmail, userId, userName, userPassword } = useSelector(
    (state) => ({
      userEmail: state.user.userEmail,
      userId: state.user.userId,
      userName: state.user.userName,
      userPassword: state.user.userPassword,
    }),
  );

  const rednerUserData = (
    <>
      <Button
        variant="link"
        onClick={() => setShow(true)}
        sx={{ marginLeft: '1em' }}
      >
        Show User data
      </Button>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="user-data"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            User data: <b>{userName}</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>
              User Email: <b>{userEmail}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              User ID: <b>{userId}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              User Name: <b>{userName}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              User Password: <b>{userPassword}</b>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

  return { rednerUserData };
};

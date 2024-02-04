import { useState, React } from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { SET_USER_LOG_STATUS } from '../state/actions';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initalState = {
    userName: '',
    userPass: '',
  };

  const userName = useSelector((state) => state.userName);
  const userPassword = useSelector((state) => state.userPassword);

  const [loginData, setLoginData] = useState(initalState);
  const [validated, setValidated] = useState(false);

  const onSubmit = () => {
    const { userName: givenUserName, userPass: givenUserPass } = loginData;

    if (givenUserName === userName && givenUserPass === userPassword) {
      setValidated(false);
      dispatch({ type: SET_USER_LOG_STATUS });
    } else {
      setValidated(true);
    }
  };

  return (
    <Col xs lg="9">
      <Form noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Control
            type="text"
            placeholder="User Name"
            onChange={(e) =>
              setLoginData((state) => ({ ...state, userName: e.target.value }))
            }
            required
            value={loginData.userName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userPass">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData((state) => ({ ...state, userPass: e.target.value }))
            }
            required
            value={loginData.userPass}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => onSubmit()}>
          Submit
        </Button>
      </Form>

      {validated && (
        <Alert
          variant="danger"
          dismissible
          style={{ marginTop: '1em' }}
          onClick={() => setValidated(false)}
        >
          Wrong user name or password
        </Alert>
      )}
    </Col>
  );
};

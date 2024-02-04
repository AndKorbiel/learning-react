import { useState, React } from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';

export const LoginForm = () => {
  const initalState = {
    userName: '',
    userPass: '',
  };

  const [loginData, setLoginData] = useState(initalState);
  const [validated, setValidated] = useState(false);

  const onSubmit = () => {
    setValidated(true);
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

import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const useWelcomeAlert = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [isLoggedIn]);

  useEffect(() => {
    setShow(false);
  }, []);

  const LoginAlert = (
    <Alert
      variant="success"
      dismissible
      style={{ marginTop: '1em' }}
      onClose={() => setShow(false)}
    >
      You've been logged in
    </Alert>
  );

  const LogOutAlert = (
    <Alert
      variant="secondary"
      dismissible
      style={{ marginTop: '1em' }}
      onClose={() => setShow(false)}
    >
      You've been logged out
    </Alert>
  );

  const renderAlert = show && (isLoggedIn ? LoginAlert : LogOutAlert);

  return { renderAlert };
};

import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

export const useWelcomeAlert = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const WelcomeAlert = isLoggedIn && (
    <Alert variant="success" dismissible style={{ marginTop: '1em' }}>
      You've been logged in
    </Alert>
  );

  return { WelcomeAlert };
};

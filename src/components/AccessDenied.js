import { Alert } from 'react-bootstrap';
import { LoginModal } from './LogiModal';

export const AccessDenined = () => (
  <Alert variant="danger">
    <Alert.Heading>Access Denined</Alert.Heading>
    <p>You have to be logged in to perform this action.</p>

    <LoginModal />
  </Alert>
);

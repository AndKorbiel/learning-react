import { Container, Navbar, Button, NavbarText } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export function TopBar({ setActiveView }) {
  const { isLoggedIn } = useSelector((state) => state);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Blog App</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="link"
            onClick={() => setActiveView('list')}
            style={{ marginRight: '1em' }}
          >
            Articles List
          </Button>

          <Button variant="primary" onClick={() => setActiveView('form')}>
            Add New Article
          </Button>

          <Button
            variant="link"
            onClick={() => setActiveView('users')}
            style={{ marginLeft: '1em' }}
          >
            Users List
          </Button>

          <NavbarText className="navbar-user-status">
            {isLoggedIn ? 'Logged in' : 'Not logged in'}
          </NavbarText>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

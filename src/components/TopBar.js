import { Container, Navbar, Button } from 'react-bootstrap';

export function TopBar({ setActiveView }) {
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

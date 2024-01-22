import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export function TopBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Blog App</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ marginRight: '1em' }}>
            PrimaryArticles List
          </Navbar.Text>

          <Button variant="primary">Add New Article</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
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

      <Container className="MainContainer">
        <Row className="RowTitle">
          <Col>
            <h1>Articles List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h3>Article #1 Title</h3>
              <span>Category #1</span>
              <span>Category #2</span>
              <p>21.01.2024</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dictum leo ipsum, eget tincidunt nulla suscipit in. In varius
                semper felis blandit posuere. Donec consequat mi velit, a
                gravida mi porta eu. Suspendisse blandit, nulla ullamcorper
                rutrum facilisis, sem augue cursus nulla, nec sodales tortor
                odio id mi. Integer condimentum turpis vitae quam feugiat, sed
                condimentum lorem iaculis. Cras volutpat odio neque, a placerat
                lacus semper a. Integer commodo nisl et mi lobortis, sed dictum
                leo maximus. Duis posuere felis at justo commodo, ac finibus
                eros varius. Pellentesque vitae diam non nisl condimentum porta
                molestie ut odio. Etiam nec lacinia metus. In non quam aliquet
                nisi porttitor cursus in ac mauris. Cras sed metus orci. Sed
                commodo augue in purus congue, eu fringilla enim lacinia. Nulla
                fermentum, ex vitae vestibulum tempus, libero ipsum consequat
                est, a varius elit quam a lorem. Mauris ultricies massa quis
                tristique placerat.
              </p>
            </div>
          </Col>

          <Col>
            <div>
              <h3>Article #2 Title</h3>
              <span>Category #1</span>
              <span>Category #2</span>
              <p>21.01.2024</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dictum leo ipsum, eget tincidunt nulla suscipit in. In varius
                semper felis blandit posuere. Donec consequat mi velit, a
                gravida mi porta eu. Suspendisse blandit, nulla ullamcorper
                rutrum facilisis, sem augue cursus nulla, nec sodales tortor
                odio id mi. Integer condimentum turpis vitae quam feugiat, sed
                condimentum lorem iaculis. Cras volutpat odio neque, a placerat
                lacus semper a. Integer commodo nisl et mi lobortis, sed dictum
                leo maximus.
              </p>
            </div>
          </Col>

          <Col>
            <div>
              <h3>Article #3 Title</h3>
              <span>Category #1</span>
              <span>Category #2</span>
              <p>21.01.2024</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dictum leo ipsum, eget tincidunt nulla suscipit in. In varius
                semper felis blandit posuere. Donec consequat mi velit, a
                gravida mi porta eu. Suspendisse blandit, nulla ullamcorper
                rutrum facilisis, sem augue cursus nulla, nec sodales tortor
                odio id mi. Integer condimentum turpis vitae quam feugiat, sed
                condimentum lorem iaculis. Cras volutpat odio neque, a placerat
                lacus semper a. Integer commodo nisl et mi lobortis, sed dictum
                leo maximus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

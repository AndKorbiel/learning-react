import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { articlesList } from './constants';

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
          {articlesList.map((article, index) => (
            <Col key={index}>
              <h2>{article.title}</h2>

              {article.metatags.map((metatag, index) => (
                <span key={index}>{metatag}</span>
              ))}
              <p>{article.date}</p>
              <p>{article.content}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

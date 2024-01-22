import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { articlesList } from './constants';
import { Article } from './components/Article';
import { TopBar } from './components/TopBar';
import { ArticleForm } from './components/ArticleForm';

function App() {
  return (
    <div className="App">
      <TopBar />

      <Container className="MainContainer">
        <Row className="RowTitle">
          <Col>
            <h1>Articles List</h1>
          </Col>
        </Row>

        <Row>
          <ArticleForm />
        </Row>

        <Row>
          {articlesList.map((article, index) => (
            <Article article={article} key={index} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

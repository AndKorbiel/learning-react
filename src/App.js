import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import { articlesList } from './constants';
import { Article, ArticleForm, TopBar } from './components/';

function App() {
  const [activeView, setActiveView] = useState('list');

  return (
    <div className="App">
      <TopBar setActiveView={setActiveView} />

      <Container className="MainContainer">
        <Row className="RowTitle">
          <Col>
            <h1>
              {activeView === 'list' ? 'Articles List' : 'Add New Article'}
            </h1>
          </Col>
        </Row>

        <Row>
          {activeView === 'list' &&
            articlesList.map((article, index) => (
              <Article article={article} key={index} />
            ))}

          {activeView === 'form' && <ArticleForm />}
        </Row>
      </Container>
    </div>
  );
}

export default App;

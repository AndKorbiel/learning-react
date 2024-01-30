import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import { useFetchArticles } from './hooks';
import { Article, ArticleForm, TopBar, UsersList } from './components/';

function App() {
  const [activeView, setActiveView] = useState('list');
  const { articles } = useFetchArticles();

  const PageName = (activeView) => {
    switch (activeView) {
      case 'list':
        return 'Articles List';
      case 'form':
        return 'Add New Article';
      case 'users':
        return 'Users List';
      default:
        return 'Not found';
    }
  };

  return (
    <div className="App">
      <TopBar setActiveView={setActiveView} />

      <Container className="main-container">
        <Row className="row-title">
          <Col>
            <h1>{PageName(activeView)}</h1>
          </Col>
        </Row>

        <Row>
          {activeView === 'list' &&
            articles.map((article, index) => (
              <Article article={article} key={index} />
            ))}

          {activeView === 'form' && <ArticleForm />}
          {activeView === 'users' && <UsersList />}
        </Row>
      </Container>
    </div>
  );
}

export default App;

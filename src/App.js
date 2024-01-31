import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useState } from 'react';

import { useFetchArticles } from './hooks';
import { Article, ArticleForm, TopBar, UsersList } from './components/';

function App() {
  const [activeView, setActiveView] = useState('list');
  const { areArticlesLoading, articles, error } = useFetchArticles();

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

  const LoadingError = (
    <Alert variant="danger" dismissible>
      Failed to fetch Articles. Please reload the page.
    </Alert>
  );

  const renderArticlesList = () => {
    if (error) return LoadingError;

    if (!areArticlesLoading) {
      return articles.map((article, index) => (
        <Article article={article} key={index} />
      ));
    }
  };

  return (
    <div className="App">
      <TopBar setActiveView={setActiveView} />

      <Container className="main-container">
        <Row className="row-title">
          <Col>
            <h1>
              {PageName(activeView)}
              {areArticlesLoading && (
                <Spinner
                  animation="border"
                  role="status"
                  style={{ marginLeft: '0.5em' }}
                />
              )}
            </h1>
          </Col>
        </Row>

        <Row>
          {activeView === 'list' && renderArticlesList()}
          {activeView === 'form' && <ArticleForm />}
          {activeView === 'users' && <UsersList />}
        </Row>
      </Container>
    </div>
  );
}

export default App;

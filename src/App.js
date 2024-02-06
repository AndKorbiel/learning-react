import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useState } from 'react';

import {
  useFetchArticles,
  ArticleContextProvider,
  useWelcomeAlert,
} from './hooks';
import {
  AccessDenined,
  Article,
  ArticleForm,
  TopBar,
  UsersList,
} from './components/';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [activeView, setActiveView] = useState('list');
  const { areArticlesLoading, articles, error, addNewArticle } =
    useFetchArticles();

  const { renderAlert } = useWelcomeAlert();

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
      <ArticleContextProvider initValue={addNewArticle}>
        <TopBar setActiveView={setActiveView} />

        <Container className="main-container">
          {renderAlert}

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
            {activeView === 'form' &&
              (isLoggedIn ? <ArticleForm /> : <AccessDenined />)}
            {activeView === 'users' && <UsersList />}
          </Row>
        </Container>
      </ArticleContextProvider>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';

import { articlesList } from './constants';
import { Article, ArticleForm, TopBar, UsersList } from './components/';

function App() {
  const [activeView, setActiveView] = useState('list');
  const [articles, setArticles] = useState(articlesList);

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

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addImagesToArticles = useCallback(
    (images) => {
      const articlesData = articles.map((article, index) => ({
        ...article,
        img: images[index].download_url,
      }));

      setArticles(articlesData);
    },
    [articles],
  );

  useEffect(() => {
    async function init() {
      try {
        const randomPageNumber = randomIntFromInterval(1, 10);
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${randomPageNumber}&limit=10`,
        );
        const data = await res.json();
        addImagesToArticles(data);
      } catch (e) {
        console.log(e);
      }
    }

    init();
  }, []);

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

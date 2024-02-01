import { useState, React } from 'react';
import { Button, Form, Col, Alert } from 'react-bootstrap';

import { useArticleContext } from '../hooks';

export const ArticleForm = () => {
  const initalState = {
    title: '',
    content: '',
    metatags: [],
  };

  const callbackFromContext = useArticleContext();

  const [newArticle, setNewArticle] = useState(initalState);
  const [validated, setValidated] = useState(false);
  const [articleSubmited, setArticleSubmited] = useState(false);

  const onSubmit = () => {
    if (!!newArticle.title && !!newArticle.content && !!newArticle.metatags) {
      setArticleSubmited(true);
      setNewArticle(initalState);
      setValidated(false);
      callbackFromContext(newArticle);
    } else {
      setValidated(true);
    }
  };

  return (
    <Col xs lg="6">
      <Form noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type here..."
            onChange={(e) =>
              setNewArticle((state) => ({ ...state, title: e.target.value }))
            }
            required
            value={newArticle.title}
          />

          <Form.Control.Feedback type="invalid">
            Please provide a Article Title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Article Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            label="Type here..."
            area="true"
            onChange={(e) =>
              setNewArticle((state) => ({ ...state, content: e.target.value }))
            }
            required
            value={newArticle.content}
          />

          <Form.Control.Feedback type="invalid">
            Please provide a Article Content.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Select Article Category</Form.Label>
          <Form.Select
            onChange={(e) =>
              setNewArticle((state) => ({
                ...state,
                metatags: [e.target.value],
              }))
            }
            required
            value={newArticle.metatags[0]}
          >
            <option value="">Select Category...</option>
            <option value="Category #1">Category #1</option>
            <option value="Category #2">Category #2</option>
            <option value="Category #3">Category #3</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please provide a Article Category.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" onClick={() => onSubmit()}>
          Submit
        </Button>
      </Form>

      {articleSubmited && (
        <Alert
          key={'success'}
          variant={'success'}
          dismissible
          style={{ marginTop: '1em' }}
          onClick={() => setArticleSubmited(false)}
        >
          New Article has been added!
        </Alert>
      )}
    </Col>
  );
};

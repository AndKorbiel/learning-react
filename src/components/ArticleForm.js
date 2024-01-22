import { Button, Form, Col } from 'react-bootstrap';

export const ArticleForm = () => {
  return (
    <Col xs lg="6">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Article Title</Form.Label>
          <Form.Control type="text" placeholder="Type here..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Article Content</Form.Label>
          <Form.Control as="textarea" rows={5} label="Type here..." area />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Select Article Category</Form.Label>
          <Form.Select>
            <option value="1">Category #1</option>
            <option value="2">Category #2</option>
            <option value="3">Category #3</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>
    </Col>
  );
};

import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

export const UsersListFilters = ({ setActiveFilters }) => {
  const [filtersValues, setFiltersValues] = useState({
    userName: '',
  });

  const handleOnChange = (e) => {
    setFiltersValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    setActiveFilters(filtersValues);
  };

  return (
    <Col xs lg="12" style={{ marginBottom: '2em', padding: 0 }}>
      <Form noValidate>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search for User Name"
              name="userName"
              value={filtersValues.userName}
              onChange={(e) => handleOnChange(e)}
            />
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={() => onSubmit()}
              style={{ width: '100%' }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

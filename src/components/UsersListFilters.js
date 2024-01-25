import { useState } from 'react';
import { Button, Form, Row, Col, CloseButton } from 'react-bootstrap';

export const UsersListFilters = ({ setActiveFilters }) => {
  const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    isFilterActive: false,
  };

  const [filtersValues, setFiltersValues] = useState(initialState);
  const { firstName, id, lastName, userName } = filtersValues;

  const handleOnChange = (e) => {
    setFiltersValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    setFiltersValues((state) => ({
      ...state,
      isFilterActive: true,
    }));

    setActiveFilters({
      id,
      firstName,
      lastName,
      userName,
    });
  };

  const handleClearFilters = () => {
    setActiveFilters({
      id: '',
      firstName: '',
      lastName: '',
      userName: '',
    });
    setFiltersValues(initialState);
  };

  return (
    <Col xs lg="12" style={{ marginBottom: '2em', padding: 0 }}>
      <Form noValidate>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search for User ID"
              name="id"
              value={id}
              onChange={(e) => handleOnChange(e)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Search for First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => handleOnChange(e)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Search for Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => handleOnChange(e)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Search for User Name"
              name="userName"
              value={userName}
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

      {filtersValues.isFilterActive && (
        <Col xl="2" className="clear-filters">
          <Form.Label style={{ marginBottom: 0 }}>Clear Filters</Form.Label>
          <CloseButton
            variant="white"
            style={{ marginLeft: '1em' }}
            onClick={() => handleClearFilters()}
          />
        </Col>
      )}
    </Col>
  );
};

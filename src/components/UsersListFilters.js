import { useState } from 'react';
import { Button, Form, Row, Col, CloseButton } from 'react-bootstrap';

export const UsersListFilters = ({ setActiveFilters }) => {
  const initialState = {
    userName: '',
    isFilterActive: false,
  };

  const [filtersValues, setFiltersValues] = useState(initialState);

  const handleOnChange = (e) => {
    e.target.value &&
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
    setActiveFilters({ userName: filtersValues.userName });
  };

  const handleClearFilters = () => {
    setActiveFilters({ userName: '' });
    setFiltersValues(initialState);
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

      {filtersValues.isFilterActive && (
        <Col xl="2" className="clearFilters">
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

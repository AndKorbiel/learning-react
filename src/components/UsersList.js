import { useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';

import { usersList } from '../constants';
import { UsersListFilters } from './UsersListFilters';

export const UsersList = () => {
  const [users] = useState(usersList);
  const [activeFilters, setActiveFilters] = useState({
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
  });

  const tableHeader = ['ID', 'First Name', 'Last Name', 'Username'];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const { firstName, id, lastName, userName } = user;
      const {
        firstName: filterFirstName,
        id: filterId,
        lastName: filterLastName,
        userName: filterUserName,
      } = activeFilters;

      return (
        (filterId ? id.toString() === filterId : user) &&
        firstName.includes(filterFirstName) &&
        lastName.includes(filterLastName) &&
        userName.includes(filterUserName)
      );
    });
  }, [activeFilters, users]);

  return (
    <>
      <UsersListFilters setActiveFilters={setActiveFilters} />

      <Table striped bordered hover>
        <thead>
          <tr>
            {tableHeader.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ firstName, id, lastName, userName }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{userName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

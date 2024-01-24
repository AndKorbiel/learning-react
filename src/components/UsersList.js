import { useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';

import { usersList } from '../constants';
import { UsersListFilters } from './UsersListFilters';

export const UsersList = () => {
  const [users] = useState(usersList);
  const [activeFilters, setActiveFilters] = useState({
    userName: '',
  });

  const tableHeader = ['ID', 'First Name', 'Last Name', 'Username'];

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.userName.includes(activeFilters.userName),
    );
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
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.userName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

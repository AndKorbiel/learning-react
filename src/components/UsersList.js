import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { usersList } from '../constants';

export const UsersList = () => {
  const [users] = useState(usersList);
  const tableHeader = ['ID', 'First Name', 'Last Name', 'Username'];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeader.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.userName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

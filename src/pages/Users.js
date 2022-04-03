import React from 'react';
import { useFecthUsers } from '../hooks/useFecthUsers';

export const Users = () => {
  const {list} = useFecthUsers();  
  return (
    <table className="tableUsers">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        {
          list.sort().map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={user.first_name} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
};

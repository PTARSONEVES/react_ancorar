import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyles';
import { UserContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/users');
      setUsers(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Página de Usuários</h1>

      <UserContainer>
        {users.map(user => (
          <div key={String(user.id)}>
            <ProfilePicture>
              {get(user, 'Userfotos[0].url', false) ? (
                <img src={user.Userfotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
          </div>
        ))}
      </UserContainer>

      {users.map(user => user.name)}
    </Container>
  );
}

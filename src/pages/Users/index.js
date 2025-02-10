import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyles';
import { UserContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/users');
      setUsers(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Cadastro de Usuários</h1>

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

            <span>{user.name}</span>
            <span>{user.email}</span>

            <Link to="users/${user.id}/edit"><FaEdit size={16} /></Link>
            <Link to="users/${user.id}/delete"><FaWindowClose size={16} /></Link>
          </div>
        ))}
      </UserContainer>
    </Container>
  );
}

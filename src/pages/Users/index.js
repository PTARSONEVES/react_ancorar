import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyles';
import { UserContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

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

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display','block');
    e.currentTarget.remove();
  };

  const hadleDelete = async(e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/users/${id}`);
      const newUsers = [...users];
      newUsers.splice(index, 1);
      setUsers(newUsers);
      setIsLoading(false);
    } catch(err) {
      const status = get(err, 'response.status', 0);

      if(status === 401) {
        toast.error('(FRONT) É necessário fazer login.');
      } else {
        toast.error('(FRONT) Ocorreu um erro ao excluir usuário');
      }

      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Cadastro de Usuários</h1>

      <UserContainer>
        {users.map((user, index) => (
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

            <Link to="users/${user.id}/edit">
              <FaEdit size={16} />
            </Link>

            <Link onClick={handleDeleteAsk} to="users/${user.id}/delete">
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={e => hadleDelete(e, user.id, index)}
            />

          </div>
        ))}
      </UserContainer>
    </Container>
  );
}

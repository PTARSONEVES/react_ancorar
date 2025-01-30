import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';

export default function Register() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usertypeid = 4;
  const history = useNavigate();

    async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if(name.length < 3 || name.length >50) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 50 caracteres');
    }

    if(lastname.length < 3 || lastname.length >50) {
      formErrors = true;
      toast.error('Sobrenome deve ter entre 3 e 50 caracteres');
    }

    if(alias.length < 3 || alias.length >50) {
      formErrors = true;
      toast.error('Apelido deve ter entre 3 e 50 caracteres');
    }

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if(password.length < 3 || password.length >15) {
      formErrors = true;
      toast.error('Senha deve ter entre 3 e 15 caracteres');
    }

    if(formErrors) return;

    try {
      await axios.post('/users/', {
        name,
        lastname,
        alias,
        email,
        password,
        usertypeid
      });
      toast.success('Seu cadastro foi realizado');
      history('/login');

    } catch(err) {
//      const status = get(e, 'response.status', 0);
      const errors = get(err, 'response.data.errors',[]);

      errors.map(error => toast.error(error));
    }

  }

  return (
    <Container>
      <h1>Registro de Usuários</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor='nome'>
          Nome:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Seu primeiro nome'
          />
        </label>
        <label htmlFor='sobrenome'>
          Sobrenome:
          <input
            type='text'
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            placeholder='Seu último nome'
          />
        </label>
        <label htmlFor='apelido'>
          Apelido:
          <input
            type='text'
            value={alias}
            onChange={e => setAlias(e.target.value)}
            placeholder='Como você quer ser chamado?'
          />
        </label>
        <label htmlFor='email'>
        E-mail:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Seu e-mail'
          />
        </label>
        <label htmlFor='senha'>
          Senha:
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Digite uma senha entre 3 e 15 caracteres'
          />
        </label>

        <button type='submit'>enviar</button>
      </Form>
    </Container>
  );
}

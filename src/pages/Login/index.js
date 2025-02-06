import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');
  console.log('prevPath :>',prevPath);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let formErrors = false;

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if(password.length < 3 || password.length >15) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if(formErrors) return;

    dispatch(actions.loginRequest({email, password, prevPath}));

  }

  return (
    <Container>
      <h1>Página de Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>


    </Container>
  );
}

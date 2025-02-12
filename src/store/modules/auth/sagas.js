import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';


function* loginRequest({payload}) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Login efetuado com sucesso!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

  } catch (e) {
    toast.error('Usuário ou senha inválido(s)!');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({payload}) {
  const token = get(payload, 'auth.token', '');
  if(!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const {id, name, email, password} = payload;

  try {
    if(id) {
      yield call(axios.put, '/users', {
        email,
        name,
        password: password || undefined,
      });
      toast.success('Usuário alterado com sucesso!');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
      Navigate('/');
    } else {
      yield call(axios.post, '/users', {
        email,
        name,
        password,
      });
      toast.success('Usuário criado com sucesso!');
      yield put(actions.registerCreatedSuccess({ name, email, password })); //envio de dados não obrigatório
      Navigate('/login');
    }

  } catch(e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você deve fazer login novamente.');
      yield put(actions.loginFailure());
      return Navigate('/login');
    }

    if (errors.length >0) {
      errors.map(error => toast.error(error));
    } else {
      toast.error('Error desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest)
]);

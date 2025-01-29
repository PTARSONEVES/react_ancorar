import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.dark.background};
    color: ${colors.dark.color};
  }
  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.dark.background};
    border: none;
    color: ${colors.dark.color};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.dark.color};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast__success {
    background: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast__error {
    background: ${colors.successColor};
  }
`;

export const Container = styled.section`
  max-width: 600px;
  background: ${colors.dark.navbar};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(100, 100, 100.1);
`;

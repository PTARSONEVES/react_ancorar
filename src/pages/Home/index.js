import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Home<small>Esta é a Homepage</small>
      </Title>
      <Paragrafo>Página em Construção</Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
}

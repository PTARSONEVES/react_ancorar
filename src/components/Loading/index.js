import React from "react";
import PropTypes from "prop-types";
import { Container } from './styled';

export default function Loading({isLoading}) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div></div>
      <span>Carregando...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false
};
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
Loading.PropTypes = {
  isLoading: PropTypes.bool
};

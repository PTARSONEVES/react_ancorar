import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.dark.background};
  font-size: 30px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${colors.dark.backgroundButton};
  }

  span {
    z-index: 2;
  }
`;

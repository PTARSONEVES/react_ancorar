import styled from 'styled-components';

export const UserContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(34, 1, 1, 0.4);
  content {
    background-color: #D3D3D3;
    margin: 15% auto;
    padding: 20px;
    border-radius: 5px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


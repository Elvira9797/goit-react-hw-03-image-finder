import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  max-width: 720px;
  max-height: calc(100vh - 50px);
`;

export const ModalImg = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

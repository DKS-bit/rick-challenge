import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: #000000ce;
  position: relative;
  margin: auto;
  width: 60rem;
  height: 60rem;
  border-radius: 8px;
  color: red;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  background-color: black;
`;

export const HeaderText = styled.div`
  align-self: center;
  color: white;
  background-color: transparent;
`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
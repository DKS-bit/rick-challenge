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
  background: #3c3e44;
  position: relative;
  margin: auto;
  border-radius: 8px;
  color: white;
  width: 35rem;

`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const List = styled.ul`
  padding: 0;
  min-width: 16rem;
  li{
    list-style: none;
    padding: 0.5rem;
    
  }
  li: nth-child(even){
    background-color: #272b33;
  }
  
  
`
export const WrapperList = styled.div`
  overflow-y: scroll;
`

export const HeaderText = styled.div`
  align-self: center;
  color: white;
  background-color: transparent;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 50%;
  width: 2rem;
  padding: 0.5rem;
  background: #3c3e44;
  color: white;
  transition: ease-out all 0.15s;
  :hover {
    cursor: pointer;
    background: #656873;
  }
`;

export const Content = styled.div`
  max-height: 30rem;
  height: 100%;
  padding: 0;
  display: flex;
  margin-top: 0;



  img {
    width: 80%;
    border-radius: 50%;
  }
`;
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;





    `
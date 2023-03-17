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
  padding: 0.3rem 1rem 0.3rem 1rem;
  background-color: #7fbe2e;
`;

export const List = styled.ul`
  padding: 1rem;
  min-width: 16rem;
  max-height: 15rem;
  overflow-y: auto;
  li{
    list-style: none;
    padding: 0.5rem;
    
  }
  li: nth-child(odd){
    background-color: #272b33;
  }
  
  
  
`
export const WrapperList = styled.div`

  
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
  background: #7fbe2e;
  color: white;
  transition: ease-out all 0.15s;
  :hover {
    cursor: pointer;
    background: #A0D759 ;
  }
`;

export const Content = styled.div`
  max-height: 30rem;
  height: 100%;
  padding: 0;
  display: flex;
  margin-top: 0;
  flex-direction: column;



  img {
    width: 30%;
    border-radius: 50%;
  }
`;
export const Upper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    padding-bottom: 0;
    h4{
      margin-top: 1rem;
      margin-bottom: 0;
    }
    h2{
    margin-top: 0;
      
    }
    
    
    align-items: center;
    font-size: 1rem;
    




    `
export const CharacterName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: inherit;
    align-items: flex-start;
    h4 {
    color: #7fbe2e;
    }
    div:nth-child(1){
      h4{
        margin-top: 0;
      }
    }
    
    `
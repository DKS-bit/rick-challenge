import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #272B33;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: 'Roboto', sans-serif;
  }
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #7FBE2E rgba(0, 0, 0, 0.3);
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #B8C0C2;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #B8C0C2;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #7FBE2E;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #A0D759;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #A0D759;
  }
`;
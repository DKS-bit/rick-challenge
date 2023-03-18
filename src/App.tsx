import React from 'react';
import {GlobalStyle} from "./App.styled";
import Cardholder from "./components/Cardholder/Cardholder";
import Banner from "./components/Banner/Banner";
function App() {
  return (
            <>
                <GlobalStyle />
                <Banner></Banner>
                <Cardholder></Cardholder>
           </>
  );
}

export default App;

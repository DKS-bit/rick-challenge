import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
     //Centered in the screen
    <div className="App">
       <Card name={"Rick Sanchez"} status={"Vivo"} image={ "https://rickandmortyapi.com/api/character/avatar/1.jpeg" } />
    </div>
  );
}

export default App;

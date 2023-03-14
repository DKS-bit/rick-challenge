import React from 'react';
import Card from './components/Card/Card';
import {ApolloProvider} from '@apollo/client';
import {onError} from "@apollo/client/link/error";
import {client} from "./graphql/apolloClient";

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
        graphQLErrors.map(({message, locations, path}) =>
            alert(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError) alert(`[Network error]: ${networkError}`);

});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
            <Card name={"Rick Sanchez"} status={"Unknow"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"} id={1}></Card>
            <Card name={"Morty Smith"} status={"Dead"} image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"} id={2}></Card>
            <Card name={"Summer Smith"} status={"Alive"} image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"} id={3}></Card>
        </div>
    </ApolloProvider>
  );
}

export default App;

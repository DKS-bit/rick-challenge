import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import {onError} from "@apollo/client/link/error";
import {client} from "./graphql/apolloClient";
import Cardholder from "./components/Cardholder/Cardholder";

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
            <Cardholder></Cardholder>
        </div>
    </ApolloProvider>
  );
}

export default App;

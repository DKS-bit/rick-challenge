import React from 'react';
import {GlobalStyle} from "./App.styled";
import Cardholder from "./components/Cardholder/Cardholder";
import Banner from "./components/Banner/Banner";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";


const errorLink = onError(({ graphQLErrors, networkError }) => {
// Log any GraphQL errors or network error that occurred
    if (graphQLErrors)

        graphQLErrors.forEach(({ message, locations, path }) =>

            console.log(

                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`

            )

        );

    if (networkError) console.log(`[Network error]: ${networkError}`);

});

const link = from([
    errorLink,
    new HttpLink({uri: "https://rickandmortyapi.com/graphql"})
])

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link

});

function App() {
  return (
            <>
                <ApolloProvider client={client}>
                    <GlobalStyle />
                    <Banner></Banner>
                    <Cardholder></Cardholder>
                </ApolloProvider>
           </>
  );
}

export default App;

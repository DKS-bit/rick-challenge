import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});
//query to get first 100 characters
export const queryCharacters = gql`

    query GetAllCharacters {
        characters (page: 3) {
            info {
                pages
                next
                prev
            }
            results {
                name
                status
                image
                id
            }
        }
    }
   
`;
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface Character {
    id: string;
    name: string;
    status: string;
    image: string;
}

interface PageInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

interface CharactersData {
    characters: {
        info: PageInfo;
        results: Character[];
    }
}

export async function getAllCharacters(): Promise<Character[]> {
    const client = new ApolloClient({
        uri: 'https://rickandmortyapi.com/graphql',
        cache: new InMemoryCache(),
    });
    //Pega a primeira pagina e o total de paginas para usar depois
    const { data } = await client.query<CharactersData>({
        query: gql`
      query GetAllCharacters($page: Int!) {
        characters(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            status
            image
          }
        }
      }
    `,
        variables: { page: 1 },
    });

    const { info, results } = data.characters;
    const totalPages = info.pages;

    // Pega todas as paginas restantes
    const promises = [];
    for (let page = 2; page <= totalPages; page++) {
        const promise = client.query<CharactersData>({
            query: gql`
        query GetAllCharacters($page: Int!) {
          characters(page: $page) {
            results {
              id
              name
              status
              image
            }
          }
        }
      `,
            variables: { page },
        });
        promises.push(promise);
        console.log(`Fetching page ${page} of ${totalPages}`);
    }

    const pages = await Promise.all(promises);
    const allCharacters = results.concat(pages.flatMap(page => page.data.characters.results));

    return allCharacters;
}
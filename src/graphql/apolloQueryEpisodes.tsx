import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface Episode {
    id: string;
    name: string;
    air_date: string;
    episode: string;
}

interface Character {
    id: string;
    episode: Episode[];
}

interface CharacterData {
    character: Character;
}

export async function getEpisodesByCharacterId(id: string): Promise<Episode[]> {
    const client = new ApolloClient({
        uri: 'https://rickandmortyapi.com/graphql',
        cache: new InMemoryCache(),
    });

    const { data } = await client.query<CharacterData>({
        query: gql`
      query GetEpisodesByCharacterId($id: ID!) {
        character(id: $id) {
          episode {
            name
            air_date
            episode
          }
        }
      }
    `,
        variables: { id },
    });

    const episodes = data.character.episode;

    return episodes;
}
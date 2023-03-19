import { gql } from '@apollo/client';

     export const loadChars = gql`
        query loadChars($page: Int!) {
            characters(page: $page) {
                info {
                    pages
                    next
                }
                results {
                    id
                    name
                    status
                    image
                }
            }
        }
    `;
    export const loadCharacterEpisodes = gql`
     query GetEpisodesByCharacterId($id: ID!) {
        character(id: $id) {
          episode {
            name
          }
        }
      }
    `;
import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import {Container} from "./Cardholder.styled";
import {useQuery} from "@apollo/client";
import {loadChars} from "../../graphql/queries";

interface rickAndMortyCharacter {
    id: string;
    name: string;
    status: string;
    image: string;
}

interface rickAndMortyData {
    characters: {
        info: {
            pages: number;
            next: number;
        },
        results: rickAndMortyCharacter[]
    }
}

export default function Cardholder() {
    const [characters, setCharacters] = useState<rickAndMortyCharacter[]>([]);
    const [page, setPage] = useState(1);
    const {error, data} = useQuery<rickAndMortyData>(loadChars, {
        variables: {
            page: page
        }
    });

    //The following useEffects load every character from the API while rendering them as they are loaded
    useEffect(() => {
        if (data) {
            setCharacters(characters.concat(data.characters.results));
        }
    } , [data]);

    useEffect(() => {
        if (data) {
            if (data.characters.info.next !== null)
            setPage(data.characters.info.next);
        }
    }, [characters]);

    if (error) return <p>Error :(</p>;

    return (
        <Container>
            {characters.map((character) => {
                return <Card key={character.id} name={character.name} status={character.status} image={character.image} id={character.id} />;
            })}
        </Container>
    );
}
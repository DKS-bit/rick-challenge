import React, {useEffect, useState} from "react";

import {getAllCharacters} from "../../graphql/apolloQuery";
import Card from "../Card/Card";
import {Container} from "./Cardholder.styled";

interface rickAndMortyCharacter {
    id: string;
    name: string;
    status: string;
    image: string;
}

function Cardholder() {

    const [characters, setCharacters] = useState<rickAndMortyCharacter[]>([]);

    useEffect(() => {
        getAllCharacters().then((characters) => {
            setCharacters(characters);
        });
    }, [])

    
    return (
        <Container>
            {characters.map((character) => {
                return <Card key={character.id} name={character.name} status={character.status} image={character.image} id={character.id} />
            })
            }

        </Container>

    );
}

export default Cardholder;
import {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {queryCharacters} from "../../graphql/apolloClient";

interface rickAndMortyCharacter {
    name: string;
    status: string;
    image: string;
    id: number;
}
interface rickAndMortyInfo {
    count: number;
    pages: number;
    next: number;
    prev: number;
}

function Cardholder() {
    const {loading, error, data} = useQuery(queryCharacters);
    const [characters, setCharacters] = useState<rickAndMortyCharacter[]>([]);
    const [info, setInfo] = useState<rickAndMortyInfo>();

    useEffect(() => {
        if (data){
            setCharacters(data.characters.results);
            setInfo(data.characters.info);
        }
    }, [data]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    
    return (
        <>
            {characters.map((character: rickAndMortyCharacter) => (
                <div key={character.id}>
                    <p>
                        {character.name} {character.status}
                    </p>
                </div>
            ))}
        </>

    );
}

export default Cardholder;
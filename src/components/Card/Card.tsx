import { Container } from './Card.styled';

interface rickAndMortyCharacter {
    name: string;
    status: string;
    image: string;
}

function Card(props: rickAndMortyCharacter) {
    return (
        <Container>
            <img src={props.image} alt={props.name} />

            <h2>{props.name}</h2>
            <p>{props.status}</p>

        </Container>
    );
}

export default Card;
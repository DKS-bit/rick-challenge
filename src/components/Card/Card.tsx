import { Container } from './Card.styled';

interface rickAndMortyCharacter {
    name: string;
    status: string;
    image: string;
    id: string;

}

function Card(props: rickAndMortyCharacter) {
    let characterStatus: JSX.Element;
    if (props.status === "Alive"){
     characterStatus =  <p className={"alive"}>Vivo</p>
    }
    else if (props.status === "Dead"){
        characterStatus =  <p className={"dead"}>Morto</p>
    }
    else {
        characterStatus =  <p className={"unknown"}>Desconhecido</p>
    }
    return (
        <Container>
            <img src={props.image} alt={props.name} />
            <div className={"infoGroup"}>
            <h2>{props.name}</h2>
            {characterStatus}

            </div>
        </Container>
    );
}

export default Card;
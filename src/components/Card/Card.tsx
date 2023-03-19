import { Container } from './Card.styled';
import { useModal } from '../Modal/useModal';
import { Modal } from '../Modal/Modal';


interface rickAndMortyCharacter {
    name: string;
    status: string;
    image: string;
    id: string;

}

function Card(props: rickAndMortyCharacter) {
    const { isShown, toggle } = useModal();
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
        <Container onClick={() =>  toggle()}>
            <Modal isShown={isShown} hide={toggle} characterName={props.name} characterImage={props.image} characterId={props.id} />
            <img src={props.image} alt={props.name} />
            <div className={"infoGroup"}>
            <h2>{props.name}</h2>
            {characterStatus}
            </div>
        </Container>
    );
}

export default Card;    
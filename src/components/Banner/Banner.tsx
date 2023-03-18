import { Container, Titles } from './Banner.styled';
import { useModal } from '../Modal/useModal';
import { Modal } from '../Modal/Modal';
const bg =  require("../../assets/banner.mov")



function Banner() {
    return (
    <Container>
        <video autoPlay loop muted src={bg}/>
        <Titles>
        <p>Wubba Lubba Dub Dub</p>
        <h1>Rickpedia</h1>
        </Titles>
    </Container>
    );
}

export default Banner;
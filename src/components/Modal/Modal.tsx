import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop, CloseButton, Content, Header, HeaderText, StyledModal, Wrapper, List, WrapperList, Upper, CharacterName } from './Modal.styled';
import { loadCharacterEpisodes } from '../../graphql/queries';
import {useQuery} from "@apollo/client";
export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    characterName: string;
    characterImage: string;
    characterId: string;
}
interface Episode {
    id: string;
    name: string;
}
interface dataResponse {
    character: {
        episode: Episode[];
    }
}
export const Modal: FunctionComponent<ModalProps> = ({
                                                         isShown,
                                                         hide,
                                                         characterName,
                                                         characterImage,
                                                         characterId,
                                                     }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const { data, error } = useQuery<dataResponse>(loadCharacterEpisodes, {
        variables: {
            id: characterId
        }
    });

    //Makes sure that modal only makes requests when it is open
    useEffect(() => {
        setIsModalOpen(isShown);
    }, [isShown]);

    useEffect(() => {
        if (isModalOpen) {
            if (data) {
                setEpisodes(data.character.episode);
            }
        }
    }, [isModalOpen]);

    const modal = (
        <React.Fragment>
            <Backdrop onClick={hide} />
            <Wrapper>
                {/*Stop propagation to make sure that only clicking outside the modal closes it*/}
                <StyledModal onClick={(event) => event.stopPropagation()}>
                    <Header>
                        <HeaderText>Detalhes do Personagem</HeaderText>
                        <CloseButton onClick={hide}>X</CloseButton>
                    </Header>
                    <Content>
                        <Upper>
                            <CharacterName>
                                <div>
                                    <h4>Personagem</h4>
                                    <h2>{characterName}</h2>
                                </div>
                                <div>
                                    <h4>Lista de </h4>
                                    <h2>Episodios</h2>
                                </div>
                            </CharacterName>
                            <img src={characterImage} alt={characterName}/>

                        </Upper>

                        <WrapperList>
                                <List>
                                {episodes.map((episode) => {
                                    return <li key={episode.name}>{episode.name}</li>;
                                })}
                                </List>
                        </WrapperList>
                    </Content>
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );
    if (error) return <p>Error :(</p>;
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
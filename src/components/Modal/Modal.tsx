import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop, CloseButton, Content, Header, HeaderText, StyledModal, Wrapper, List, WrapperList, LeftSide } from './Modal.styled';
import { getEpisodesByCharacterId } from '../../graphql/apolloQueryEpisodes';
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


export const Modal: FunctionComponent<ModalProps> = ({
                                                         isShown,
                                                         hide,
                                                         characterName,
                                                         characterImage,
                                                         characterId,


                                                     }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    //Foi feito isso para que o modal so faca as requisicoes quando o episodio for aberto
    useEffect(() => {
        setIsModalOpen(isShown);
    }, [isShown]);

    useEffect(() => {
        if (isModalOpen) {
            getEpisodesByCharacterId(characterId).then((episodes) => {
                setEpisodes(episodes);
            });
        }
    }, [isModalOpen]);
    const modal = (


        <React.Fragment>
            <Backdrop onClick={hide} />
            <Wrapper>
                {/*Stop propagation para garantir que so cliques fora ou no x do modal fechem */}
                <StyledModal onClick={(event) => event.stopPropagation()}>
                    <Header>
                        <HeaderText>Detalhes do Personagem</HeaderText>
                        <CloseButton onClick={hide}>X</CloseButton>
                    </Header>
                    <Content>
                        <LeftSide>
                            <img src={characterImage} alt={characterName}/>
                            <h2>{characterName}</h2>
                        </LeftSide>

                        <WrapperList>
                            <h2>Episódios</h2>
                                <List>
                                {episodes.map((episode) => {
                                    return <li key={episode.id}>{episode.name}</li>
                                })}
                                </List>
                        </WrapperList>
                    </Content>
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
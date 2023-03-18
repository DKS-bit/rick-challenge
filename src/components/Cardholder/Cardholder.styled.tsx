import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    overflow-y: auto;
    padding-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
    div:nth-child(odd){
      background: #272b33;
    }


  }
\`
`;

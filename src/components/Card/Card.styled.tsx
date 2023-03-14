import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 200px;
    height: 323px;
    background-color: #3C3E44;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    color:#F5F5F5;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;

      
    }
    .infoGroup{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border-radius: 10px;
        padding-left: 10px;
        align-self: flex-start;
        height: 28%;
        h2{
          margin: 0;
        }
        p{
            margin: 0;
        }
    }
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
    .alive{
        color: #00FF00;
      
    }
    .dead{
        color: #FF0000;
    }
    .unknown{
        color: #FFA500;
    }
    `
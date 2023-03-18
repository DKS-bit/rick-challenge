import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 230px;
    height: 300px;
    background-color: #3C3E44;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    color:#F5F5F5;
    transition: ease-out all 0.15s;
  
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
          overflow: hidden;
          max-height: 2rem;
          font-size: 1.2rem;
        }
        p{
            margin: 0;
        }
    }
  &:hover{
    cursor: pointer;
    transform: scale(1.04);
  }
    .alive{
        color: #4FB243;
      
    }
    .dead{
        color: #FF5151;
    }
    .unknown{
        color: #FFA500;
    }
  
    @media (max-width: 768px) {
      &:hover{
        transform: none;
      }
      width: 100%;
      height: 8rem;
      margin: 0;  
      border-radius: 0;
      box-shadow: none;
      flex-direction: row;
      justify-content: flex-start;
      gap: 1.5rem;
      align-items: center;
      padding:0 1rem;
        img{
          padding: 0rem;
          width: 5.5rem; 
          height: auto;
          border-radius: 10px
          
        }
        .infoGroup{
          line-height: 1.2rem;
          align-self: flex-start;
          padding-top: 1rem;

          height: auto; 
          padding-left: 0;
            h2{
                max-height: fit-content;
                font-size: 1rem;
            }

        }
          
    }
    `
import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  video{
    object-fit: cover;
    width: 100vw;
    height: 100%;
    max-width: 100%;
  }

  
`
export const Titles = styled.div`
  position: absolute;
  font-size: 5rem;
  color: #fff;
  font-weight: 900;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0;
    p{
        font-size: 2rem;
        font-weight: 800;
        padding: 0;
        margin: 0;
        color: #272b33;
        justify-self: flex-start;
        align-self: flex-start;
        
      
    } 
  h1{
    align-self: center;
    margin: 0;
    padding: 0;
    font-weight: 900;
    justify-self: flex-start;
    line-height: 1;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    p{
      font-size: 1rem;
    }
  }


  
  
`
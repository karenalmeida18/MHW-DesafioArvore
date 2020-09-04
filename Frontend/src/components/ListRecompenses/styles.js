import styled from "styled-components";

export const RecompensesContainer = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  h3{
    margin-left: 20px;
  }

  svg{
    margin-right: 12px;
    margin-left: 20px;
    font-size: 20px;
  }

  button{
    text-decoration: none;
    transition: background 0.2s;
  }
 
  @media(min-width: 700px){
    padding: 8px 110px 8px 110px;
  }

`;

export const RecompensesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NewRecompensa = styled.button`
  display: flex; 
  flex-direction: row;
  align-items: center;
  align-self: initial;
  width: 50%;
  height: 50px;
  margin: 25px 0 25px 20px;
  border: none;
  border-radius: 10px;
  background-color: #45D0C1;
  color: #FFFFFF;
  
  svg {
    color: #FFFFFF;
  }
`;

export const Recompense = styled.button`
  display: flex;
  width: 100%;
  height: 50px; 
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: #FFFFFF;
  border-bottom: 1px solid #dbdbdb;

  svg {
    color: #A97ED1;
  }
  
  @media(min-width: 700px){
    height: 80px;
  }
`;
import styled from "styled-components";

export const RecompensesContainer = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  h1{
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

`;

export const RecompensesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid #999999;
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
  border-bottom: 1px solid #999999;

  svg {
    color: #A97ED1;
  }
`;
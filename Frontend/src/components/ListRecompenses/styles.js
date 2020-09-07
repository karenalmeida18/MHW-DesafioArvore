import styled from "styled-components";

export const RecompensesContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-content: center;

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
  height: 100%;
`;

export const NewRecompensa = styled.button`
  display: flex; 
  flex-direction: row;
  align-items: center;
  align-self: initial;
  width: 50%;
  height: 50px;
  margin: 25px 0 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #45D0C1;
  color: #FFFFFF;
  
  svg {
    color: #FFFFFF;
  }

  :hover{
        background-color: #00BFA6;   
  }
`;

export const Recompense = styled.button`
  display: flex;
  width: 100%;
  min-height: 50px; 
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

export const Avatar = styled.img`
  display: block;
  position: fixed;
  width: 250px;
  height: 250px;
  bottom: 40px;
  right: 0;
  animation:tilt-in-right-1 .8s cubic-bezier(.25,.46,.45,.94) both;

  @keyframes tilt-in-right-1{
    0%{
      transform:rotateX(-30deg) translateX(300px) skewX(30deg);
      opacity:0};
    100%{
      transform:rotateX(0deg) translateX(0) skewX(0deg);
      opacity:1};
  }
`;

export const FundoMacaco = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 200px;
  bottom: 0;
  background-color: #C7ED9E;
`;

export const BordaGrama = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  top: -35px;
`;


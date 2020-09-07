import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 600px;
    margin: 100px 0 50px 0;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    @media (min-width:700px){
        padding: 8px 110px;
        width: 60%;
    }
`;

export const Titulo = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: initial;
    background-color: #FFFFFF;
    padding: 20px;
    
    svg{
        color: black;
        font-size: 35px;
        margin: 0;
    }

    h1{
        margin-left: 10px;
        font: 700 25px Roboto;
        color: black;
    }

    @media (min-width:700px){
        padding: 8px 110px;
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
    height: 150px;
    bottom: 0;
    background-color: #C7ED9E;

    @media (min-width:700px){
      height: 80px
    }
`;

export const BordaGrama = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    top: -35px;
`;

export const Estante = styled.div`
    width: 90%;
    height: 500px;
    background-color: #BB7A4B;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: initial;
    border-radius: 5px;

    @media (min-width:700px){
      width: 100%;
    }
`;

export const Prateleira = styled.div`
    margin-top: 20px;
    width: 90%;
    height: 120px;
    background-color: #E4C3AA;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
`;

export const Livro = styled.img`
    /* margin-left: 6px; */
    width: auto;
    height: 100px;

    :hover{
        width: auto;
        height: 85%;
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.24),0 5px 15px 0 rgba(0,0,0,0.19);
    }
`;


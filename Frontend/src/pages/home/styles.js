import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100vh;

    svg{
        color: #FFFFFF;
        font-size: 50px;
        margin-bottom: 15px;
    }


    button{
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background 0.2s;
    }

    p{
        margin-left: 10px;
        font: 700 20px Roboto;
        color: #FFFFFF;
    }
`;

export const Ambients = styled.div`
    width: 85%;
    height: 400px;
    margin: 10px 0;
    display: grid; /* divide a minha tela em um grid */
    grid-template-columns: 1fr 1fr; /* fracionando em 5 e pegando 3 colunas*/
    grid-template-rows: 1fr 2fr 2fr; /* pegando 2 linhas */
    grid-template-areas: 
        "titulo titulo"
        "floresta jardim" 
        "pomar terrario";


    @media (min-width: 700px){
        width: 65%;
        height: 450px;
    }
`;

export const Titulo = styled.div`
    grid-area: titulo;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: initial;
    
    svg{
        color: black;
        font-size: 40px;
        margin: 0;
    }

    h1{
        margin-left: 10px;
        font: 700 25px Roboto;
        color: black;
    }
`;

export const Floresta = styled.button`
    grid-area: floresta;
    background-color: #45D0C1;
    border-radius: 5px 0 0 0;
    
    :hover{
        background-color: #00BFA6;   
    }
`;

export const Jardim = styled.button`
    grid-area: jardim;
    background-color: #FFA17C;
    border-radius: 0 5px 0 0;

    :hover{
        background-color: #EB9560;   
    }
`;

export const Pomar = styled.button`
    grid-area: pomar;
    background-color: #A97ED1;
    border-radius: 0 0 0 5px;

    :hover{
        background-color: #A55EBF;   
    }
`;

export const Terrario = styled.button`
    grid-area: terrario;
    background-color: #96DD48;
    border-radius: 0 0 5px 0;

    :hover{
        background-color: #83C240;   
    }
`;

export const Recompensas = styled.button`
    width: 85%;
    height: 60px;
    background-color: #A97ED1;
    border-radius: 5px;
    margin-top: 15px;

    p{
        display: flex;
        align-items: center;
    }

    :hover{
        background-color: #A55EBF;   
    }

    svg{
        font-size: 30px;
        margin: 0;
        margin-left: 10px;
    }

    @media (min-width: 700px){
        width: 65%;
        height: 75px;
    }
`;



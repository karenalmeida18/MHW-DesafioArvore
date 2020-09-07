import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    padding: 5px 10px;
    margin-bottom: 30%;
    border-radius: 0px 0px 10px 10px ;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    top: 0;
    width: 100%;
    background: rgba(69,208,193, 24);
    svg{
        font-size: 30pt;
        color: #45D0C1;
        :hover{
        transform:scale(1.5);
        }
    }
    -webkit-box-shadow: 9px 2px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:  9px 7px 5px rgba(50, 50, 50, 0.77);
    box-shadow:  px 7px 5px rgba(50, 50, 50, 0.77);
`;

export const Nivel = styled.button`
    padding: 9px 15px 9px 15px;
    border-radius: 30px;
    background-color: white;
    font: bolder 16pt Arial;
    color: #45D0C1;
    outline: 0;
    border: 0;

    :hover{
        transform:scale(1.2);
    }
	
`;

export const InfoNivel = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 15px;
    background-color: #fff;
    margin-top: 20%;
    color: grey;
    width: auto;
    height: 50%;
    z-index: 5;
    border-radius: 15px;
    .close{
        color: black;
        text-align: end;
        margin: 0;
        margin-left: 90%;
    }
    p{
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    strong {
        color: #45D0C1;
        margin-left: 10px;
        margin-right: 10px;
    }
    svg{
        color: #fcd406;
        font-size: 17pt;
    }
`
export const MissionBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: auto;
    color: black;
    align-items: center;

    .container-books{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        
    }
    .container-books > div{
       display: flex;
       padding: 5px;
       flex-direction: column;
       border-radius: 10px;
       margin-left: 6px;
       font-size: 10pt;
       -webkit-box-shadow: 9px 5px 5px rgba(50, 50, 50, 0.77);
       -moz-box-shadow:  9px 5px 5px rgba(50, 50, 50, 0.77);
       box-shadow:  9px 5px 5px rgba(50, 50, 50, 0.77);
       
       :nth-child(1) {
        background-color: #FFA17C;
       }
       
       :nth-child(2) {
        background-color:  #A97ED1;
       }
       
       :nth-child(3) {
        background-color: #96DD48;
       }
    }    
    svg{
       color: black;
    }
    
    
`;
export const Livro = styled.img`
    width: auto;
    height: 55px;
    padding: 5px ;
`;
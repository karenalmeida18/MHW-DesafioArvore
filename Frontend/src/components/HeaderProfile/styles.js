import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    padding: 10px 10px;
    margin-bottom: 30%;
    margin-top: 8px;
    width: 95%;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    top: 0;
    background: #AB6A4F;

    svg{
        font-size: 30pt;
        :hover{
            transform: scale(1.2);
        }
    }
    -webkit-box-shadow: 9px 2px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:  9px 7px 5px rgba(50, 50, 50, 0.77);
    box-shadow:  9px 7px 5px rgba(50, 50, 50, 0.77);
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

export const InfoModal= styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 15px;
    background-color: #FFFFFF;
    margin-top: 20%;
    color: grey;
    width: auto;
    height: 60%;
    z-index: 5;
    border-radius: 15px;
    p{
        display: flex;
        align-items: center;
        margin-top: 15px;
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
        align-items: center;
    }
    
    .container-books > div{
        width: 32%;
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        -webkit-box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.77);
        -moz-box-shadow:  5px 5px 5px rgba(50, 50, 50, 0.77);
        box-shadow:  5px 5px 5px rgba(50, 50, 50, 0.77);
       
       :nth-child(1) {
        background-color: #FFA17C;
       }
       
       :nth-child(2) {
        background-color:  #A97ED1;
       }
       
       :nth-child(3) {
        background-color: #96DD48;
       }

       p{
        font-size: 12pt;
        color: #222222;
        font-weight: 300;
       }
       :hover{
            transform: scale(1.1);
        }
    }    
    svg{
        color: #222222;
    }
    
    p{
        padding: 0;
        margin: 8px 0;
        font-weight: 600;
        font-size: 20px;
    }
    
`;
export const Livro = styled.img`
    height: auto;
    width: 70%;
`;
export const Title = styled.title`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 18pt;
    font-weight: 600;
    svg{
        color: gray;
    }
`;

export const ProgressBarBox = styled.div`
    height: 20px;
    border-radius: 25px;
    background-color: #CCC;
    position: relative;
    margin: 10px 0;
` 
  
export const ProgressBar = styled.div`
   position: absolute;
   border-radius: 25px;
   height: 100%;
   background-color: #0fd439;
   animation: progress-animation 5s infinite;
   @keyframes progress-animation{
    0% { width: 0%; } 
   100% { width: 100%}
}
`
  
export const Conquista = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 10pt;
    margin: 6px;
    svg{
        font-size: 45pt;
        border: 1px solid #eeee;
    }
    div{
        margin-left: 20px;
        border: 1px solid #eeee;
        flex: 1;
    }
`
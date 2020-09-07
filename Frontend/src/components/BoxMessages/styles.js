import styled, { keyframes } from "styled-components";

const fadeScale = keyframes`
    from{
        opacity: 0;
        transform: scale(0.1);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
`;

export const Container = styled.div `    
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        left: 0;
        width:100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0);
        z-index: 2;
`;
export const Content = styled.div `
        margin-top: 30%;
        font-family: arial;
        display: flex;
        align-items: center;
        padding: 25px 15px ;
        justify-content: center;    
        background-color: white;
        color: #45D0c1;
        border-radius: 10px;
        width: 65%;
        height: 80px;
        animation: ${fadeScale} 2s;
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        -moz-box-shadow:  9px 7px 5px rgba(50, 50, 50, 0.77);
        box-shadow:  px 7px 5px rgba(50, 50, 50, 0.77);
`;

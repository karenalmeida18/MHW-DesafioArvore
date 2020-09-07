import styled, { keyframes } from "styled-components";

const shower = keyframes `
    100% {
        margin-top: 500px;
        opacity: 0;
}
 `
export const Gota = styled.div `    
         background: #f0f1f1;
         width: 16px;
         height: 16px;
         transform: rotate(45deg);
         border-radius: 0px 200px 200px 200px;
         -moz-border-radius: 0px 200px 200px 200px;
         -webkit-border-radius: 0px 200px 200px 200px;
         border: 0px solid #000000;
         box-shadow: 2px 1px 2px 0 #666666;
         position: absolute;
         animation: ${shower} 1s ease-in-out infinite;
         top: -30px;
         display: ${props => props.inShower ? "block" : "none"};

`;

import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #45D0C1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentModal = styled.div `
     display: ${props => props.sleep? "block" : "none"};
     position: absolute;
     top: 0;
     left: 0;
     width:100%;
     height: 100vh;
     background: rgba(0, 0, 0, 0.8);
     z-index:1;
`;
export const Avatar = styled.img`
    width: auto;
    height: 400px;
`;
export const AvatarAnimate = styled.img`
    width: auto;
    height: 400px;
    display: ${props => props.isEating ? "block" :  "none"};    
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;
    bottom : 0;
    width: 100%;
`;

export const ShowerButton = styled.button.attrs(props => ({
    disabled: props.isEating || props.sleep
}))`
    &[disabled]{
        opacity: 0.6;
    }
    color: ${props => props.inShower ? "#ffff" :"black "};
    font-size: 40pt;
    border: 0;
    background-color: inherit;
`;

export const EatButton = styled.button.attrs(props => ({
    disabled: props.inShower || props.sleep
}))`
    &[disabled]{
        opacity: 0.6;
    }
    color: ${props => props.isEating ? "#b3b3b3" :"black "};
    font-size: 40pt;
    border: 0;
    background-color: inherit;
`;

export const SleepButton = styled.button.attrs(props => ({
    disabled: props.isEating || props.inShower
}))`
    &[disabled]{
        opacity: 0.6;
    }
    color: ${props => props.sleep ? "yellow" :"black "};
    font-size: 40pt;
    border: 0;
    background-color: inherit;
`;


export const Food = styled.div`
    color : rgba(186, 33,33,100);
    font-size: 20pt;
    position: relative;
    transform: rotate(15deg);
    animation: fadeBottom .2s;
    left:-180px; top:-66px;
    @keyframes fadeBottom {
    50%   { left:0px; bottom: -400px;}
    100% { left:-150px; top:-60px;}
}    

`;

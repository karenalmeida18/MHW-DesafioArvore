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
    height: 500px;
    margin: 23px 0 0 40px;
    display: ${props => props.isEating ? "block" :  "none"};    
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    position: fixed;
    z-index: 2;
    bottom : 0;
    width: 95%;
    border-radius: 25px;
    margin-bottom: 10px;
    background-color: #AB6A4F;
    padding: 15px 0;
    -webkit-box-shadow: 9px 2px 5px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:  9px 7px 5px 7px rgba(50, 50, 50, 0.77);
    box-shadow:  10px 10px 10px 4px rgba(50, 50, 50, 0.77);

    img{
        height: 70px;
        width: auto;
        :hover{
            transform: scale(1.2);
        }
    }
`;

export const ShowerButton = styled.button.attrs(props => ({
    disabled: props.isEating || props.sleep
}))`
    &[disabled]{
        opacity: 0.6;
    }
    border: 0;
    background-color: inherit;
`;

export const EatButton = styled.button.attrs(props => ({
    disabled: props.inShower || props.sleep
}))`
    &[disabled]{
        opacity: 0.6;
    }
    border: 0;
    background-color: inherit;
`;

export const SleepButton = styled.button.attrs(props => ({
    disabled: props.isEating || props.inShower
}))`
    &[disabled]{
        opacity: 0.6;
    }
    border: 0;
    background-color: inherit;
`;


export const Food = styled.div`
    color : rgba(186, 33,33,100);
    font-size: 30pt;
    position: relative;
    transform: rotate(15deg);
    animation: fadeBottom .2s;
    left:-180px; top:-66px;
    @keyframes fadeBottom {
    50%   { left:0px; bottom: -400px;}
    100% { left:-150px; top:-60px;}
}    

`;

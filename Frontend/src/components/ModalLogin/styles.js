import styled, { keyframes, css } from "styled-components";


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

export const ContainerLogin = styled.div `
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
        background-color: white;
        margin-top: 10%;
        animation-name: ${fadeScale};
        animation-duration: 1.1s;
        h3{
            margin-left: 20px;
            margin-bottom: 20px;
        }
        svg {
            margin-right: 20px;
            margin-left: 20px;
            font-size: 20px;
        }
        @media(min-width: 700px){
            margin: auto;
            height: 500px;
            width: 600px;
            overflow-y: hidden;
            border-radius: 20px;
        }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

    input{
        flex: 1;
        border: 1px;
        border-bottom: 1px solid #eeee;
        padding: 10px 15px;
        font-size: 16px;
    }
    ${props => props.error && css`
        input {
            border-bottom: 1px solid red;
        }
    `}
`;

export const MsgBox = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 8pt;
    color: gray;
    margin-top: 10px;

`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`

    background-color: #45D0C1;
    color: #ffff;
    border: 0;
    padding:15px 0px;
    border-radius: 4px;
    width: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }
    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`;
import styled, { keyframes, css } from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

    input{
        flex: 1;
        border: 0;
        border-bottom: 1px solid #eeee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
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
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Roboto', sans-serif;
        min-height: 100%;
    }
    button {
        cursor: pointer;
    }

`;
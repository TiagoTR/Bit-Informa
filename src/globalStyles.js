import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: #141414;
    }

    body {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    button, input, textarea {
        outline: none;
        border-radius: 5px;
    }
    button {
        cursor: pointer;
        border: none;
    }
`;
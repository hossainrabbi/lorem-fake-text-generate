import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #063251;
        --secondary-color: #617d98;
        --white-color: #ffffff;
        --white-dark-color: #dddddd;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Dosis', sans-serif;
    }

    h1, h2, h3, h4 {
        font-family: 'Pacifico', cursive;
    }
`;

export const Button = styled.button`
  padding: 8px 20px;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 0;
  background-color: var(--white-color);
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;

  &:hover {
    color: var(--white-color);
    background-color: var(--secondary-color);
  }
`;

export default GlobalStyle;

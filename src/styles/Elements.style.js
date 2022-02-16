import styled from 'styled-components';

// App Component
export const MainContainer = styled.main`
  max-width: 1170px;
  margin: 0 auto;
  width: 90vw;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: var(--main-color);
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const LoremContainer = styled.article`
  margin-top: 50px;
  padding: 0 20px;

  p {
    color: var(--secondary-color);
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
`;

// Generate Component
export const Form = styled.form`
  label {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: var(--main-color);
  }

  input {
    width: 60px;
    padding: 8px 6px;
    border: 2px solid var(--white-dark-color);
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 600;
    color: var(--main-color);

    &:focus {
      outline: none;
    }
  }
`;

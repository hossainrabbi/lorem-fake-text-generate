import React, { useEffect, useState } from 'react';
import Generate from './Components/Generate';
import lorem from './data';
import { LoremContainer, MainContainer, Title } from './styles/Elements.style';
import GlobalStyle from './styles/Global.style';

export default function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setText([lorem[0]]);
  }, []);

  const handleGenerateSubmit = (e) => {
    e.preventDefault();
    setText(lorem.slice(0, parseInt(count)));
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Title>Lorem Ipsum</Title>
      <Generate
        count={count}
        setCount={setCount}
        handleSubmit={handleGenerateSubmit}
      />
      <LoremContainer>
        {text.map((item, index) => (
          <p key={Math.random() * index}>{item}</p>
        ))}
      </LoremContainer>
    </MainContainer>
  );
}

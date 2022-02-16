import React from 'react';
import { Form } from '../styles/Elements.style';
import { Button } from '../styles/Global.style';

export default function Generate({ count, setCount, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="inputCount">Paragraphs:</label>
      <input
        type="number"
        min={1}
        max={20}
        required
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <Button type="submit">Generate</Button>
    </Form>
  );
}

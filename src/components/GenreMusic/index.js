import React from 'react';

import { Container, Title } from './styles';

export default function GenreMusic({ name, color }) {
  return (
    <Container color={color}>
      <Title>{name}</Title>
    </Container>
  );
}

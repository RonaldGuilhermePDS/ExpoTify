import React from 'react';

import { Container, Image, InformationContainer, ArtistName } from './styles';

export default function Artist({ name, photo }) {
  return (
    <Container>
      <Image
        source={{
          uri: photo,
        }}
      />
      <InformationContainer>
        <ArtistName>{name}</ArtistName>
      </InformationContainer>
    </Container>
  );
}

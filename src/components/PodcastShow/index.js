import React from 'react';

import {
  Container,
  Image,
  InformationContainer,
  ChanelPodcastName,
} from './styles';

export default function PodcastShow({ photoAlbum, name }) {
  return (
    <Container>
      <Image
        source={{
          uri: photoAlbum,
        }}
      />
      <InformationContainer>
        <ChanelPodcastName>{name}</ChanelPodcastName>
      </InformationContainer>
    </Container>
  );
}

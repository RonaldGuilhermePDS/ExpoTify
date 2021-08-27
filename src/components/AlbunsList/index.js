import React from 'react';

import { FontAwesome } from '@expo/vector-icons';

import { Container, Image, AlbumInformation, Title } from './styles';

export default function AlbunsList({
  name,
  photoAlbum,
  recentPlayed = false,
  podcast = false,
}) {
  return (
    <Container recentPlayed={recentPlayed}>
      <Image source={{ uri: photoAlbum }} />
      <AlbumInformation>
        {!podcast && <FontAwesome name="random" size={15} color="#acacac" />}
        <Title podcast={podcast}>{name}</Title>
      </AlbumInformation>
    </Container>
  );
}

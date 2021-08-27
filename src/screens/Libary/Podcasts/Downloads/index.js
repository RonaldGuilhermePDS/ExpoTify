import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  DownloadMessager,
  SubMessage,
  ContainerButton,
  TextButton,
} from './styles';

export default function Downloads() {
  return (
    <Container>
      <DownloadMessager>Ainda não há downloads</DownloadMessager>

      <SubMessage>
        Toque <AntDesign name="download" size={12} /> em um episódio para ouvir
        sem uma conexão.
      </SubMessage>

      <ContainerButton>
        <TextButton>Navegar pelos podcasts</TextButton>
      </ContainerButton>
    </Container>
  );
}

import React, { useState } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  BarStatus,
  Line,
  PhotoAlbum,
  Music,
  Information,
  InformationAlbum,
  TitleMusic,
  Separator,
  AuthorName,
  InformationController,
  DescriptionDevices,
  Controller,
} from './styles';

export default function Player() {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <Container>
      <BarStatus>
        <Line />
      </BarStatus>
      <PhotoAlbum
        source={{
          uri: 'https://i.scdn.co/image/ab67616d00001e02e2dd4e821bcc3f70dc0c8ffd',
        }}
      />
      <Music>
        <Information>
          <InformationAlbum>
            <TitleMusic>Losing My Religion</TitleMusic>
            <Separator> • </Separator>
            <AuthorName>R.E.M</AuthorName>
          </InformationAlbum>
          <InformationController>
            <MaterialCommunityIcons
              name="speaker-wireless"
              size={14}
              color="#FFF"
            />
            <DescriptionDevices>Dispositivos Disponíveis</DescriptionDevices>
          </InformationController>
        </Information>
        <Controller onPress={() => setPlayMusic(!playMusic)}>
          {playMusic && (
            <MaterialCommunityIcons name="pause" size={30} color="#FFF" />
          )}
          {!playMusic && (
            <MaterialCommunityIcons name="play" size={30} color="#FFF" />
          )}
        </Controller>
      </Music>
    </Container>
  );
}

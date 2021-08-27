import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Episodie,
  AreaPhotoEpisodie,
  Image,
  InformationEpisodie,
  TitlePodcast,
  AuthorPodcast,
  ActionsArea,
  DescriptionTime,
} from './styles';

export default function EpisodiePodcast({
  photo,
  name,
  ChanelPodcast,
  informations,
}) {
  return (
    <Container>
      <Episodie>
        <AreaPhotoEpisodie>
          <Image source={{ uri: photo }} />
        </AreaPhotoEpisodie>
        <InformationEpisodie>
          <TitlePodcast>{name}</TitlePodcast>
          <AuthorPodcast>{ChanelPodcast}</AuthorPodcast>
        </InformationEpisodie>
      </Episodie>
      <ActionsArea>
        <AntDesign name="play" size={30} color="#fff" />
        <DescriptionTime>{informations}</DescriptionTime>
        <AntDesign name="check" size={24} color="#fff" />
        <AntDesign name="download" size={24} color="#fff" />
      </ActionsArea>
    </Container>
  );
}

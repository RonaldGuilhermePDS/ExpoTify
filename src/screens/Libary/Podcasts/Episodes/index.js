import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import EpisodiePodcast from '../../../../components/EpisodiePodcast';
import api from '../../../../services/api';

import { Container } from './styles';

export default function Episodes() {
  const [episodies, setEpisodies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/PodCasts');

      setEpisodies(response.data.Episodies);
    }

    getData();
  }, []);

  return (
    <Container>
      <FlatList
        data={episodies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <EpisodiePodcast
            name={item.name}
            photo={item.photo}
            informations={item.informations}
            ChanelPodcast={item.podcastChanel}
          />
        )}
      />
    </Container>
  );
}

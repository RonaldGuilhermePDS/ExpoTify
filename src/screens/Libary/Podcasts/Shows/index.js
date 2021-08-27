import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import PodcastShow from '../../../../components/PodcastShow';
import api from '../../../../services/api';

import { Container } from './styles';

export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/PodCasts');

      setShows(response.data.Shows);
    }

    getData();
  }, []);

  return (
    <Container>
      <FlatList
        data={shows}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <PodcastShow name={item.name} photoAlbum={item.photoAlbum} />
        )}
      />
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import Artist from '../../../../components/Artist';
import api from '../../../../services/api';

import { Container } from './styles';

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/Playlists');

      setArtists(response.data.Artists);
    }

    getData();
  }, []);

  return (
    <Container>
      <FlatList
        data={artists}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Artist name={item.name} photo={item.photo} />
        )}
      />
    </Container>
  );
}

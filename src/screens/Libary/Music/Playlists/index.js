import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import Playlist from '../../../../components/Playlist';
import api from '../../../../services/api';

import { Container } from './styles';

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/Playlists');

      setPlaylists(response.data.YourPlaylists);
    }

    getData();
  }, []);

  return (
    <Container>
      <FlatList
        data={playlists}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Playlist
            name={item.name}
            photoAlbum={item.photoAlbum}
            create={item.create}
          />
        )}
      />
    </Container>
  );
}

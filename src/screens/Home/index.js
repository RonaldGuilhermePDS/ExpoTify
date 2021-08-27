import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import AlbunsList from '../../components/AlbunsList';
import Player from '../../components/Player';
import api from '../../services/api';

import { Container, Title } from './styles';

export default function Home() {
  const [recently, setRecently] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [madeForYou, setMadeForYou] = useState([]);
  const [popularPlaylists, setPopularPlaylists] = useState([]);
  const [yourPlaylists, setYourPlaylists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/db');

      setRecently(response.data.Recently.Playlists);
      setPodcasts(response.data.PodCasts.Shows);
      setMadeForYou(response.data.Playlists.MadeForYou);
      setPopularPlaylists(response.data.Playlists.PopularPlaylists);
      setYourPlaylists(response.data.Recently.YourPlaylists);
    }

    getData();
  }, []);

  return (
    <Container>
      <ScrollView>
        <Entypo
          name="cog"
          size={25}
          color="#acacac"
          style={{ alignSelf: 'flex-end', marginTop: 20, marginRight: 10 }}
        />
        <Title>Tocadas Recentemente</Title>
        <FlatList
          data={recently}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList
              name={item.name}
              photoAlbum={item.photoAlbum}
              recentPlayed
            />
          )}
        />
        <Title>Seus Podcasts</Title>
        <FlatList
          data={podcasts}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} podcast />
          )}
        />
        <Title>Feito para Você</Title>
        <FlatList
          data={madeForYou}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} />
          )}
        />
        <Title>Playlists mais Populares</Title>
        <FlatList
          data={popularPlaylists}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} />
          )}
        />
        <Title>Suas Playlists</Title>
        <FlatList
          data={yourPlaylists}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <AlbunsList name={item.name} photoAlbum={item.photoAlbum} />
          )}
        />
      </ScrollView>
    </Container>
  );
}

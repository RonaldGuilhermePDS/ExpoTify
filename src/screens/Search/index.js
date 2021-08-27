import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList } from 'react-native';

import GenreMusic from '../../components/GenreMusic';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import { Container, Title } from './styles';

export default function Search() {
  const [yourTop, setYourTop] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [YOffSet, setYOffSet] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/Categories');

      setYourTop(response.data.TopGenres);
      setAllGenres(response.data.All);
    }

    getData();
  }, []);

  const handeScroll = (props) => {
    const YOffSet = props.nativeEvent.contentOffset.y;
    setYOffSet(YOffSet);
  };

  return (
    <Container>
      <Title YOffSet={YOffSet} search>
        Pesquisar
      </Title>

      <SearchBar />

      <ScrollView scrollEventThrottle onScroll={handeScroll}>
        <FlatList
          data={yourTop}
          numColumns={2}
          ListHeaderComponent={<Title>Gêneros</Title>}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator
          renderItem={({ item }) => (
            <GenreMusic name={item.name} color={item.color} />
          )}
        />

        <FlatList
          data={allGenres}
          numColumns={2}
          ListHeaderComponent={<Title>Navegar por todos</Title>}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GenreMusic name={item.name} color={item.color} />
          )}
        />
      </ScrollView>
    </Container>
  );
}

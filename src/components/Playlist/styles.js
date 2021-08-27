import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'center',
})`
  height: 60px;
  width: 60px;
  align-self: center;
  background: #80808055;
  margin: 10px 20px 5px;
`;

export const InformationContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding: 0px 0px 10px;
`;

export const TitlePlaylist = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0px 0px;
  color: #fff;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: #141414;
  padding: 5px 0px 5px;
`;

export const BarStatus = styled.View`
  background-color: #202020;
  position: absolute;
  height: 5%;
  width: 100%;
`;

export const Line = styled.View`
  background-color: #fff;
  position: absolute;
  height: 100%;
  width: 50%;
`;

export const PhotoAlbum = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 20%;
`;

export const Music = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Information = styled.View`
  align-items: flex-start;
  padding: 2px;
  flex: 4;
`;

export const InformationAlbum = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;

export const TitleMusic = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Separator = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const AuthorName = styled.Text`
  color: #a3a3a3;
  font-size: 14px;
`;

export const InformationController = styled.TouchableOpacity`
  padding: 9px 0px 0px;
  flex-direction: row;
  flex: 1;
`;

export const DescriptionDevices = styled.Text`
  color: #fff;
  font-size: 11px;
  margin-left: 5px;
`;

export const Controller = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
`;

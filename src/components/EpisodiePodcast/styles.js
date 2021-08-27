import styled from 'styled-components/native';

export const Container = styled.View`
  height: auto;
  margin: 10px 20px 10px;
  border-radius: 10px;
  background: #80808044;
`;

export const Episodie = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 15px 10px 10px;
`;

export const AreaPhotoEpisodie = styled.View``;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 60px;
  width: 60px;
  border-radius: 8px;
  background: #80808055;
`;

export const InformationEpisodie = styled.View`
  width: 75%;
  margin-bottom: 10px;
`;

export const TitlePodcast = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  font-size: 14px;
  color: #fff;
  padding: 5px 10px 0px;
  font-weight: bold;
`;

export const AuthorPodcast = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: 10px;
  color: #ffffff77;
  padding: 5px 10px 0px;
`;

export const ActionsArea = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px 15px 10px;
  justify-content: space-between;
`;

export const DescriptionTime = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: 11px;
  color: #808080dd;
  font-weight: bold;
  padding: 3% 0px 0px;
  margin-left: -11%;
`;

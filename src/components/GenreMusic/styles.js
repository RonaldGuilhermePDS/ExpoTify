import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-start;
  width: 44%;
  height: 95px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  margin: 10px 10px 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin: 10px 10px 0px;
  flex-wrap: wrap;
  color: #fff;
  align-self: flex-start;
  font-weight: bold;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: ${(props) => (props.search ? 35 : 20)}px;
  color: #fff;
  align-self: flex-start;
  margin: 10px 10px 10px;
  margin-top: ${(props) => (props.search ? 20 : 10)}px;
  margin-bottom: ${(props) => (props.search ? 20 : 10)}px;
  font-weight: bold;
  display: ${(props) => (props.YOffSet > 40 ? 'none' : 'flex')};
  z-index: 5;
`;

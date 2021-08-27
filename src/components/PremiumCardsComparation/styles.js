import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 20px 10px;
  width: 345px;
`;

export const LeftSide = styled.View`
  flex-direction: column;
  background-color: #333333;
  width: 50%;
  height: 150px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 10px 0px;
`;

export const RigthSideContainer = styled.View`
  overflow: hidden;
  width: 50%;
  height: 150px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 5px 10px #000;
`;

export const RigthSide = styled(LinearGradient).attrs({
  colors: ['#0B9969', '#202020'],
  start: { x: 1, y: 0 },
  end: { x: -1, y: -1 },
})`
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 10px 0px;
`;

export const TextPlan = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-top: -25px;
`;

export const DescriptionPlan = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  width: 90%;
  height: auto;
  min-height: 200px;
  align-self: center;
  margin: 20px 0px 20px;
`;

export const ContainerGradient = styled(LinearGradient).attrs((props) => ({
  colors: [`${props.colorGradientStart}`, `${props.colorGradientEnd}`],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
`;

export const TextPlan = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 0px 30px 0px;
`;

export const DescriptionPlan = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: -10px;
  padding: 0px 25px 0px;
`;

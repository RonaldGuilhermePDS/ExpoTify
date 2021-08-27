import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background: #000;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['#0B9555', '#000'],
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  padding: 50px 0px 0px;
  align-items: center;
`;

export const TitlePromotion = styled.Text`
  color: #fff;
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  padding: 0px 10px 0px;
  margin-bottom: 40px;
`;

export const TextPlansPremium = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 15px 14px 0px;
  margin-bottom: 30px;
`;

export const ContainerCurrentPlan = styled.View`
  width: 90%;
  height: 60px;
  background: #333333bb;
  margin: 10px 0px 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px 0px;
`;

export const TextCurrentPlan = styled.Text`
  color: #fff;
  font-size: ${(props) => (props.currentPlan ? 15 : 20)}px;
  font-weight: ${(props) => (props.currentPlan ? 'normal' : 'bold')};
`;

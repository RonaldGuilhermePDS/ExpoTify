import React from 'react';

import {
  Container,
  LeftSide,
  TextPlan,
  DescriptionPlan,
  RigthSideContainer,
  RigthSide,
} from './styles';

export default function PremiumCardsCompration({
  DescriptionPlanFree,
  DescriptionPlanPremium,
}) {
  return (
    <Container>
      <LeftSide>
        <TextPlan>FREE</TextPlan>
        <DescriptionPlan>{DescriptionPlanFree}</DescriptionPlan>
      </LeftSide>
      <RigthSideContainer>
        <RigthSide>
          <TextPlan>PREMIUM</TextPlan>
          <DescriptionPlan>{DescriptionPlanPremium}</DescriptionPlan>
        </RigthSide>
      </RigthSideContainer>
    </Container>
  );
}

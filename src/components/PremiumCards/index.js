import React from 'react';

import {
  Container,
  ContainerGradient,
  TextPlan,
  DescriptionPlan,
} from './styles';

export default function PremiumCards({
  Plan,
  Description,
  colorGradientStart,
  colorGradientEnd,
}) {
  return (
    <Container>
      <ContainerGradient
        colorGradientStart={colorGradientStart}
        colorGradientEnd={colorGradientEnd}>
        <TextPlan>{Plan}</TextPlan>
        <DescriptionPlan>{Description}</DescriptionPlan>
      </ContainerGradient>
    </Container>
  );
}

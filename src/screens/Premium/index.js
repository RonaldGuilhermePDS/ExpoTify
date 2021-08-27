import React from 'react';
import { FlatList } from 'react-native';

import PremiumCards from '../../components/PremiumCards';
import PremiumCardsComparation from '../../components/PremiumCardsComparation';

import {
  Container,
  ContainerGradient,
  TitlePromotion,
  TextPlansPremium,
  ContainerCurrentPlan,
  TextCurrentPlan,
} from './styles';

const PlansComparation = [
  {
    id: 1,
    DescriptionPlanFree: 'Anúncios entre músicas',
    DescriptionPlanPremium: 'Músicas sem propagandas',
  },
  {
    id: 2,
    DescriptionPlanFree: 'Escute em ordem aleatória',
    DescriptionPlanPremium: 'Ouça qualquer música',
  },
  {
    id: 3,
    DescriptionPlanFree: 'Pule 6 faixas por hora',
    DescriptionPlanPremium: 'Pule quantas faixas você quiser',
  },
  {
    id: 4,
    DescriptionPlanFree: 'Ouça apenas conectado',
    DescriptionPlanPremium: 'Ouça sem estar conectado',
  },
  {
    id: 5,
    DescriptionPlanFree: 'Baixa qualidade de áudio',
    DescriptionPlanPremium: 'Alta qualidade de áudio',
  },
];

const Plans = [
  {
    id: 1,
    namePlan: 'Spotify Premium',
    description:
      'Experimente o Premium por 30 dias • Música sem anúncios • Ouça off-line • Cancele a qualquer momento',
    colorGradientStart: '#06524F',
    colorGradientEnd: '#15A85B',
  },
  {
    id: 2,
    namePlan: 'Premium para Estudantes',
    description:
      'Preço baixo de estudante • Música sem anúncios • Escuta offline • Cancele a qualquer momento',
    colorGradientStart: '#E38D38',
    colorGradientEnd: '#DD854D',
  },
  {
    id: 3,
    namePlan: 'Double Premium',
    description:
      '2 contas Premium • Duo Mix: lista de reprodução compartilhada para dois • Música sem anúncios • Escuta offline • Desfrute do som sob demanda • Cancele a qualquer momento',
    colorGradientStart: '#434C83',
    colorGradientEnd: '#578BBB',
  },
  {
    id: 4,
    namePlan: 'Premium para Família',
    description:
      'Até 6 contas Premium • Bloqueia a reprodução de música com conteúdo explicado • Desfrute do som sob demanda • Música sem anúncios • Escuta offline • Cancele a qualquer momento',
    colorGradientStart: '#2C3158',
    colorGradientEnd: '#812A88',
  },
];

export default function Premium() {
  return (
    <Container>
      <ContainerGradient>
        <TitlePromotion>
          Desfrute da sua música ao máximo com o Premium
        </TitlePromotion>

        <FlatList
          data={PlansComparation}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <PremiumCardsComparation
              key={item.id}
              DescriptionPlanFree={item.DescriptionPlanFree}
              DescriptionPlanPremium={item.DescriptionPlanPremium}
            />
          )}
        />

        <TextPlansPremium>
          Você não pode atualizar para Premium no aplicativo. Nós sabemos, não é
          o ideal.
        </TextPlansPremium>

        <ContainerCurrentPlan>
          <TextCurrentPlan>Spotify Free</TextCurrentPlan>
          <TextCurrentPlan currentPlan>Plano Atual</TextCurrentPlan>
        </ContainerCurrentPlan>

        {Plans.map((item) => (
          <PremiumCards
            key={item.id}
            Plan={item.namePlan}
            Description={item.description}
            colorGradientStart={item.colorGradientStart}
            colorGradientEnd={item.colorGradientEnd}
          />
        ))}
      </ContainerGradient>
    </Container>
  );
}

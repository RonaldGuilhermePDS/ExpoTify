import React from 'react';

import { BottomTabBar } from '@react-navigation/bottom-tabs';

import Player from '../../components/Player';

export default function CustomTabBar(props) {
  return (
    <>
      <Player />
      <BottomTabBar {...props} />
    </>
  );
}

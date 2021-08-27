import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="rgba(25,20,20,0.8)"
        barStyle="light-content"
      />

      <Routes />
    </>
  );
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './navigation/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Rotas/>
    </NavigationContainer>
  );
}


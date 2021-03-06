import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Rotas from './navigation/routes';
import {cor} from './theme/Tema';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={cor}>
        <StatusBar style="auto" />
        <Rotas/>
      </ThemeProvider>
    </NavigationContainer>
  );
}
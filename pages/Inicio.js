
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Container, ImagemEntrega, IniciarBotao, TextoIniciar} from '../components/Constantes'
import logo from  '../assets/assets/Time-logo.png'
import { NavigationContainer } from '@react-navigation/native';

const Inicio = ({navigation}) => {
  return(
      <Container>
        <ImagemEntrega source={logo}>
          <IniciarBotao
          onPress={() => navigation.navigate('Login')}>
            <TextoIniciar>Iniciar</TextoIniciar>
          </IniciarBotao>
          
          </ImagemEntrega>
      </Container>
  ) 
}

export default Inicio;
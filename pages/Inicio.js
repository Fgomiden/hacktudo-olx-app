
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Container, ImagemEntrega, IniciarBotao, telaRoxa, TextoIniciar} from '../components/Constantes'
import entregar from  '../assets/assets/entregar.png'
import { NavigationContainer } from '@react-navigation/native';

const Inicio = ({navigation}) => {
  return(
      <Container>
        <ImagemEntrega source={entregar}>
          <IniciarBotao
          onPress={() => navigation.navigate('Login')}>
            <TextoIniciar>Iniciar</TextoIniciar>
          </IniciarBotao>
          
          </ImagemEntrega>
      </Container>
  ) 
}

export default Inicio;
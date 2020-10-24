import React from "react";
import { View, Image } from "react-native";
import { Container } from "../components/Constantes";
import { BotaoCinza } from "../components/Botoes";
import { TextoPreto } from "../components/Textos";
import { cor } from "../theme/Tema";

const Inicio = ({ navigation }) => {
  return (
    <Container bgCor={cor.branco} align="center" justify="center">
      <View style={{ flex: 0.7 }}>
        <Image source={require("../assets/Time-logo.png")} />
      </View>
      <View style={{ flex: 0.3 }}>
        <BotaoCinza
          largura="200"
          altura="60"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <TextoPreto tamFonte="26">Entrar</TextoPreto>
        </BotaoCinza>
      </View>
    </Container>
  );
};

export default Inicio;


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


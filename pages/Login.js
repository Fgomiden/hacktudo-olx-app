import React from "react";
import { View, Text } from "react-native";
import { Container, ContCircularCima } from "../components/Constantes";
import { TextoCinza, TextoPreto } from "../components/Textos";
import { TextoInputCinza } from "../components/Inputs";
import {
  BotaoLaranja,
  BotaoLaranjaClaro,
  BotaoCinza,
} from "../components/Botoes";
import { cor } from "../theme/Tema";
const Login = ({ navigation }) => {
  return (
    <Container flex={1} justify="center" bgCor={cor.roxo}>
      <Container
        flex={0.2}
        direcao="column"
        justify="center"
        align="flex-start"
      >
        <TextoCinza tamFonte="30" style={{ marginLeft: 20 }}>
          Login
        </TextoCinza>
      </Container>
      <ContCircularCima flex={0.8} bgCor={cor.cinza_claro}>
        <Container
          flex={0.7}
          direcao="column"
          align="flex-start"
          justify="center"
          style={{ marginHorizontal: 20 }}
        >
          <Container flex={0.3} direcao="row">
            <Container flex={1} direcao="column">
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                E-mail
              </TextoPreto>
              <TextoInputCinza
                altura="45"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder=""
                name="email"
              />
            </Container>
          </Container>
          <Container flex={0.3} direcao="row">
            <Container flex={1} direcao="column">
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                Senha
              </TextoPreto>
              <TextoInputCinza
                altura="45"
                autoCapitalize="none"
                placeholder=""
                name="senha"
              />
            </Container>
          </Container>
          <Container flex={0.1} direcao="row">
            <TextoPreto tamFonte="18">Esqueceu sua senha ?</TextoPreto>
          </Container>
        </Container>
        <Container flex={0.3} align="center">
          <BotaoLaranja
            largura="200"
            altura="60"
            onPress={() => {
              navigation.navigate("BarraInferior");
            }}
          >
            <TextoCinza tamFonte="26">Entrar</TextoCinza>
          </BotaoLaranja>
        </Container>
      </ContCircularCima>
    </Container>
  );
};
export default Login;

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView, TextInput } from 'react-native';
import { RetanguloLogin } from '../components/Constantes';

export default function Login() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      
      
        <Text>Email</Text>
        <TextInput
         style={styles.input}
        placeholder=" Insira seu email"
        />
        <Text>Senha</Text>
        <TextInput
         style={styles.input}
        placeholder=" Insira sua senha"
        />
      
      <TouchableOpacity>
     <Text>Esqueceu a senha?</Text>
   </TouchableOpacity>
   <TouchableOpacity
   style={styles.button}
   >
     <Text>Continuar</Text>
   </TouchableOpacity>
   
      </View> 
      
      </ScrollView>
  );
}

       
   
const styles = StyleSheet.create({
  container: {
        flex: 1,
        padding:50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
          width:150,
          height:50,
          borderRadius:5,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#F28000'
      },
  input: {
    margin: 15,
    height: 40,
    // borderWidth: 1,
    backgroundColor:'#E5E5E5', color:'#008542', borderRadius: 5
 },
 
});


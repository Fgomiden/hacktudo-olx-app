import React from "react";
import { View, Image } from "react-native";
import { Container, ContCircular } from "../components/Constantes";
import { TextoCinza, TextoPreto, TextoBranco } from "../components/Textos";
import { TextoInputCinza } from "../components/Inputs";
import { BotaoLaranja } from "../components/Botoes";
import { cor } from "../theme/Tema";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Perfil = () => {
  return (
    <Container flex={1} bgCor={cor.roxo}>
      <ContCircular flex={0.15}
        direcao="row"
        bgCor={cor.cinza_claro}
        bdTopLeft="0"
        bdTopRight="0"
        bdBottomLeft="35"
        bdBottomRight="35"
      >
        <Container
          flex={0.7}
          direcao="column"
          justify="center"
          align="flex-start"
        >
          <TextoPreto tamFonte="24" style={{ marginLeft: 20 }}>
            Perfil
          </TextoPreto>
        </Container>
        <Container flex={0.3} direcao="row" align="center">
          <Container
            flex={1}
            direcao="row"
            align="flex-end"
            justify="space-evenly"
          >
            <FontAwesome5 name="home" size={24} color="black" />
            <FontAwesome5 name="ellipsis-v" size={24} color="black" />
          </Container>
        </Container>
      </ContCircular>
      <Container flex={0.3} direcao="column">
        <Container flex={0.5} align="center" justify="center">
          <MaterialIcons name="person" size={120} color="black" />
        </Container>
        <Container flex={0.5} align="center" justify="center">
          <TextoBranco tamFonte="19">Escolha sua foto</TextoBranco>
        </Container>
      </Container>
      <ContCircular
        flex={0.6}
        bgCor={cor.cinza_claro}
        bdTopLeft="35"
        bdTopRight="35"
        bdBottomLeft="0"
        bdBottomRight="0"
      >
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
                Nome
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
                Telefone
              </TextoPreto>
              <TextoInputCinza
                altura="45"
                autoCapitalize="none"
                placeholder=""
                name="senha"
              />
            </Container>
          </Container>
        </Container> 
        </ContCircular> 
    </Container>
  );
};

export default Perfil;

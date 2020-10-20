import React from "react";
import { View, Text } from "react-native";
import { Container, ContCircular } from "../components/Constantes";
import { TextoCinza, TextoPreto } from "../components/Textos";
import { TextoInputCinza } from "../components/Inputs";
import { BotaoLaranja } from "../components/Botoes";
import { cor } from "../theme/Tema";

const Login = () => {
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
      <ContCircular
        flex={0.8}
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
          <BotaoLaranja largura="200" altura="60">
            <TextoCinza tamFonte="26">Entrar</TextoCinza>
          </BotaoLaranja>
        </Container>
      </ContCircular>
    </Container>
  );
};

export default Login;

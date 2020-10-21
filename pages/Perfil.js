import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ContCircular } from "../components/Constantes";
import { TextoCinza, TextoPreto, TextoBranco } from "../components/Textos";
import { TextoInputCinza } from "../components/Inputs";
import { BotaoLaranja } from "../components/Botoes";
import { cor } from "../theme/Tema";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Perfil = ({ navigation }) => {
  return (
    <Container flex={1} bgCor={cor.roxo}>
      <ContCircular
        flex={0.15}
        direcao="row"
        bgCor={cor.cinza_claro}
        bdTopLeft="0"
        bdTopRight="0"
        bdBottomLeft="35"
        bdBottomRight="35"
      >
        <Container
          flex={0.2}
          direcao="column"
          justify="center"
          align="center"
          style={{ marginTop: 20 }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <FontAwesome5 name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </Container>
        <Container flex={0.8} direcao="row" align="center">
          <Container
            flex={1}
            direcao="row"
            align="flex-start"
            style={{ marginTop: 20 }}
          >
            <TextoPreto tamFonte="24">Perfil</TextoPreto>
          </Container>
        </Container>
      </ContCircular>
      <Container flex={0.25} direcao="column">
        <Container flex={0.6} align="center" justify="center">
          <MaterialIcons name="person" size={110} color="black" />
        </Container>
        <Container flex={0.4} align="center" justify="center">
          <TextoBranco tamFonte="19">Escolha sua foto</TextoBranco>
        </Container>
      </Container>
      <ContCircular
        flex={0.75}
        bgCor={cor.cinza_claro}
        bdTopLeft="35"
        bdTopRight="35"
        bdBottomLeft="0"
        bdBottomRight="0"
      >
        <Container
          flex={0.8}
          direcao="column"
          align="flex-start"
          justify="center"
          style={{ marginHorizontal: 20, marginVertical: 10 }}
        >
          <Container flex={0.3} direcao="row" style={{ marginBottom: 10 }}>
            <Container flex={0.7} direcao="column" style={{ marginRight: 10 }}>
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
            <Container flex={0.3} direcao="column">
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                Idade
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
          <Container flex={0.3} direcao="row" style={{ marginBottom: 10 }}>
            <Container flex={0.7} direcao="column" style={{ marginRight: 10 }}>
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                Telefone
              </TextoPreto>
              <TextoInputCinza
                altura="45"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder=""
                name="email"
              />
            </Container>
            <Container flex={0.3} direcao="column">
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                Genero
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
          <Container flex={0.3} direcao="row" style={{ marginBottom: 10 }}>
            <Container flex={0.7} direcao="column" style={{ marginRight: 10 }}>
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                Cidade
              </TextoPreto>
              <TextoInputCinza
                altura="45"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder=""
                name="email"
              />
            </Container>
            <Container flex={0.3} direcao="column">
              <TextoPreto tamFonte="23" style={{ marginBottom: 5 }}>
                UF
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
                Endereco
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
        </Container>
        <Container flex={0.2} align="center" justify="center">
          <BotaoLaranja
            largura="200"
            altura="60"
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <TextoCinza tamFonte="26">Confirmar</TextoCinza>
          </BotaoLaranja>
        </Container>
      </ContCircular>
    </Container>
  );
};

export default Perfil;

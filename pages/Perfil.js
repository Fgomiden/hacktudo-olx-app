import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  ContCircularCima,
  ContCircularBaixo,
} from "../components/Constantes";
import { TextoCinza, TextoPreto, TextoBranco } from "../components/Textos";
import { TextoInputCinza } from "../components/Inputs";
import {
  BotaoCinza,
  BotaoLaranja,
  BotaoLaranjaClaro,
} from "../components/Botoes";
import { cor } from "../theme/Tema";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Perfil = ({ navigation }) => {
  return (
    <Container flex={1} justify="center" style={{ marginHorizontal: 15 }}>
      <Container flex={0.7} direcao="column" align="center" justify="center">
        <Container
          bgCor="#FFF"
          justify="center"
          align="center"
          style={{ width: "100%", borderRadius: 10 }}
        >
          <Container flex={0.4} direcao="column">
            <Container flex={1} align="center" justify="center">
              <MaterialIcons name="person" size={110} color="black" />
            </Container>
          </Container>
          <Container
            flex={1}
            direcao="column"
            align="center"
          >
            <Container flex={0.2} direcao="row" bgCor={cor.verde}>
              <TextoPreto tamFonte="18" style={{ textAlign: "center" }}>
                Luis Tomio Suemtsu {"\n"} Vendedor
              </TextoPreto>
            </Container>
            <Container flex={0.3} direcao="row"  bgCor={cor.vermelho_claro}>
              <TextoPreto tamFonte="18">
                Endereço: Rua A, Bairro B, Teresópolis RJ
              </TextoPreto>
            </Container>
            <Container flex={0.3} direcao="row" justify="center" align="center">
              <BotaoLaranja largura="200" altura="60">
                <TextoCinza tamFonte="26">Iniciar Chat</TextoCinza>
              </BotaoLaranja>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Perfil;

/*
<Container flex={1} bgCor={cor.roxo}>
      <ContCircularBaixo flex={0.18} direcao="row" bgCor={cor.cinza_claro}>
        <Container flex={0.8} direcao="row" align="center">
          <Container
            flex={1}
            direcao="row"
            align="flex-start"
            style={{ marginLeft: 20 }}
          >
            <TextoPreto tamFonte="24">Perfil</TextoPreto>
          </Container>
        </Container>
        <Container
          flex={0.2}
          direcao="column"
          justify="center"
          align="center"
          style={{ marginRight: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </Container>
      </ContCircularBaixo>
      <Container flex={0.25} direcao="column">
        <Container flex={0.6} align="center" justify="center">
          <MaterialIcons name="person" size={110} color="black" />
        </Container>
        <Container flex={0.4} align="center" justify="center">
          <TextoBranco tamFonte="19">Escolha sua foto</TextoBranco>
        </Container>
      </Container>
      <ContCircularCima flex={0.8} bgCor={cor.cinza_claro}>
        <Container
          flex={1}
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
      </ContCircularCima>
    </Container>

*/

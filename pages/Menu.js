import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ContCircular } from "../components/Constantes";
import { TextoCinza, TextoPreto, TextoBranco } from "../components/Textos";
import { TextoInputCinza, TextoInputCinzaClaro } from "../components/Inputs";
import { BotaoLaranja } from "../components/Botoes";
import Slider from "@react-native-community/slider";
import { cor } from "../theme/Tema";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Menu = ({ navigation }) => {
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
          flex={0.7}
          direcao="column"
          justify="center"
          align="flex-start"
        >
          <TextoPreto tamFonte="24" style={{ marginLeft: 40 }}>
            Menu
          </TextoPreto>
        </Container>
        <Container flex={0.3} direcao="row">
          <Container
            flex={1}
            direcao="row"
            align="center"
            justify="space-evenly"
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Perfil");
              }}
            >
              <MaterialIcons name="person" size={30} color="black" />
            </TouchableOpacity>
            <FontAwesome5 name="ellipsis-v" size={20} color="black" />
          </Container>
        </Container>
      </ContCircular>
      <Container flex={0.2} direcao="column">
        <Container flex={0.6} align="center" justify="center">
          <MaterialIcons name="person" size={80} color="black" />
        </Container>
        <Container flex={0.4} align="center" justify="center">
          <TextoPreto tamFonte="19">Nome</TextoPreto>
        </Container>
      </Container>
      <ContCircular
        flex={0.7}
        bgCor={cor.cinza_claro}
        bdTopLeft="35"
        bdTopRight="35"
        bdBottomLeft="0"
        bdBottomRight="0"
      >
        <Container flex={0.3} direcao="column">
          <Container flex={0.5} direcao="row">
            <Container flex={0.5} direcao="row" align="center" justify="center">
              <TextoPreto tamFonte="18">Distancia</TextoPreto>
            </Container>
            <Container flex={0.5} direcao="row" align="center" justify="center">
              <TextoPreto tamFonte="18">10 Km</TextoPreto>
            </Container>
          </Container>
          <Container flex={0.5} direcao="row" align="center" justify="center">
            <Slider
              style={{ width: 300, height: 10 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </Container>
        </Container>
        <Container
          flex={0.4}
          direcao="column"
          style={{ borderRadius: 10, marginHorizontal: 20 }}
          bgCor={cor.verde_claro}
        >
          <Container flex={0.5} direcao="row">
            <Container flex={0.6} direcao="row" align="center" justify="center">
              <TextoPreto tamFonte="18">Horários Disponíveis:</TextoPreto>
            </Container>
            <Container
              flex={0.4}
              direcao="row"
              align="center"
              justify="center"
              style={{ marginHorizontal: 10 }}
            >
              <TextoInputCinzaClaro
                altura="45"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder=""
                name="email"
              />
            </Container>
          </Container>
          <Container flex={0.5} direcao="row">
            <Container flex={0.6} direcao="row" align="center" justify="center">
              <TextoPreto tamFonte="18">Dias da Semana:</TextoPreto>
            </Container>
            <Container
              flex={0.4}
              direcao="row"
              align="center"
              justify="center"
              style={{ marginHorizontal: 10 }}
            >
              <TextoInputCinzaClaro
                altura="45"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder=""
                name="email"
              />
            </Container>
          </Container>
        </Container>
      </ContCircular>
    </Container>
  );
};

export default Menu;

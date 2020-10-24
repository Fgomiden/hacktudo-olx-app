import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from "react-native";
import { Container, ContCircular } from "../components/Constantes";
import { cor } from "../theme/Tema";
import {
  BotaoCinza,
  BotaoLaranja,
  BotaoLaranjaClaro,
} from "../components/Botoes";
import { TextoCinza, TextoPreto } from "../components/Textos";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
export default function ModalCustom(
  modalOpen,
  distancia,
  duracao,
  detalhes,
  setModalOpen,
  setDirection,
  setDetalhes
) {
  return (
    <Modal visible={modalOpen} animationType="fade" transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalOpen(false);
          setDirection(false);
        }}
      >
        {!detalhes ? (
          <Container flex={1} align="center" justify="flex-end">
            <Container
              flex={0.4}
              direcao="column"
              justify="center"
              align="center"
            >
              <Container
                bgCor="#FFF"
                justify="center"
                align="center"
                style={{ width: "100%", borderRadius: 10 }}
              >
                <Container flex={0.7} justify="center" align="center">
                  <Container flex={0.3} direcao="row">
                    <TextoPreto tamFonte="18" style={{ fontWeight: "bold" }}>
                      Gabriel, solicita coleta do produto
                    </TextoPreto>
                  </Container>
                  <Container flex={0.4} justify="center" align="center">
                    <TextoPreto
                      tamFonte="16"
                      style={{
                        textAlign: "center",
                        marginHorizontal: 10,
                      }}
                    >
                      Coletar em: Rua 2, Limoeiro, Guapimirim, RJ{"\n"}
                      Entregar em: Rua A, Bairro B, Teresopolis RJ.
                      {"\n"}
                      Distancia Aproximada:{`${distancia}`} km{"\n"}
                      Tempo Total Estimado:{`${duracao}`} min{"\n"}
                    </TextoPreto>
                  </Container>
                  <Container flex={0.2} justify="center">
                    <TextoPreto tamFonte="16" style={{ fontWeight: "700" }}>
                      Valor Total: R$ 20,00
                    </TextoPreto>
                  </Container>
                </Container>
                <Container flex={0.4} direcao="row">
                  <Container flex={1} direcao="column">
                    <Container flex={0.5} direcao="row">
                      <Container flex={0.5} justify="center" align="center">
                        <BotaoLaranja
                          largura="100"
                          altura="40"
                          onPress={() => {
                            setModalOpen(false);
                          }}
                        >
                          <TextoCinza tamFonte="18">Aceitar</TextoCinza>
                        </BotaoLaranja>
                      </Container>
                      <Container flex={0.5} justify="center" align="center">
                        <BotaoCinza
                          largura="100"
                          altura="40"
                          onPress={() => {
                            setModalOpen(false);
                            setDirection(false);
                          }}
                        >
                          <TextoPreto tamFonte="18">Recusar</TextoPreto>
                        </BotaoCinza>
                      </Container>
                    </Container>
                    <Container
                      flex={0.5}
                      direcao="row"
                      align="center"
                      justify="center"
                    >
                      <BotaoLaranjaClaro
                        largura="180"
                        altura="40"
                        onPress={() => {
                          setDetalhes(true);
                        }}
                      >
                        <TextoCinza
                          tamFonte="20"
                          style={{ textAlign: "center" }}
                        >
                          Mais Detalhes
                        </TextoCinza>
                      </BotaoLaranjaClaro>
                    </Container>                    
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        ) : (
          <Container flex={1} align="center" justify="center">
            <Container
              flex={0.7}
              direcao="column"
              align="center"
              justify="center"
            >
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
                <Container flex={1} direcao="column" align="center">
                  <Container flex={0.2} direcao="row">
                    <TextoPreto tamFonte="18" style={{ textAlign: "center" }}>
                      Gabriel Reis {"\n"} Vendedor desde FEV 18
                    </TextoPreto>
                  </Container>
                  <Container flex={0.3} direcao="row">
                    <TextoPreto tamFonte="18">
                      Endereço: Rua A, Bairro B, Teresópolis RJ
                    </TextoPreto>
                  </Container>
                  <Container
                    flex={0.3}
                    direcao="row"
                    justify="center"
                    align="center"
                  >
                    <BotaoLaranja largura="200" altura="60">
                      <TextoCinza tamFonte="26">Iniciar Chat</TextoCinza>
                    </BotaoLaranja>
                  </Container>
                  <Container
                      flex={0.3}
                      direcao="row"
                      align="center"
                      justify="center"
                    >
                      <BotaoCinza
                        largura="180"
                        altura="40"
                        onPress={() => {
                          setDetalhes(false);
                        }}
                      >
                        <TextoPreto
                          tamFonte="20"
                          style={{ textAlign: "center" }}
                        >
                          Voltar
                        </TextoPreto>
                      </BotaoCinza>
                    </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        )}
      </TouchableWithoutFeedback>
    </Modal>
  );
}

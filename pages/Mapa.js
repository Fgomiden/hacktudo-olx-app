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
import { expo } from "../app.json";
import { Container, ContCircular } from "../components/Constantes";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import Marcadores from "../Dados/Marcadores";
import { cor } from "../theme/Tema";
import {
  BotaoCinza,
  BotaoLaranja,
  BotaoLaranjaClaro,
} from "../components/Botoes";
import { TextoCinza, TextoPreto } from "../components/Textos";
import ModalCustom from '../components/ModalCustom';

const { height, width } = Dimensions.get("window");
const Mapa = () => {
  const [mapLoad, setMapLoad] = useState(false);
  const [direction, setDirection] = useState(false);
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const [userLatDelta, setUserLatDelta] = useState(0.01);
  const [userLonDelta, setUserLonDelta] = useState(0.01);
  const [distancia, setDistancia] = useState();
  const [duracao, setDuracao] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [detalhes, setDetalhes] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Acesso a Localizacao foi negado");
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      setUserLat(coords.latitude);
      setUserLon(coords.longitude);
      setMapLoad(true);
    })();
  }, []);

  return (
    <Container bgCor={cor.branco} flex={1}>
      {!mapLoad ? (
        <Container flex={1} justify="center">
          <ActivityIndicator
            size="large"
            animating
            color="#5c5e61"
            size="large"
          />
        </Container>
      ) : (
        <Container flex={1}>
          <MapView
            region={{
              latitude: userLat,
              longitude: userLon,
              latitudeDelta: userLatDelta,
              longitudeDelta: userLonDelta,
            }}
            showsUserLocation
            showsCompass
            rotateEnabled
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {!direction ? (
              <Container flex={1}>
                <Marker
                  coordinate={{ latitude: -22.507931, longitude: -42.977372 }}
                  title="Coleta Produto A"
                  description="Em espera"
                  pinColor="#F28000"
                  onPress={() => {
                    setModalOpen(true);
                    setDirection(true);
                    setUserLatDelta(0.15);
                    setUserLonDelta(0.15);
                  }}
                />
              </Container>
            ) : (
              <Container>
                <Marker
                  coordinate={{ latitude: -22.507931, longitude: -42.977372 }}
                  title="Coleta Produto A"
                  description="Em espera"
                  pinColor="#F28000"
                />
                <MapViewDirections
                  origin={{ latitude: -22.507931, longitude: -42.977372 }}
                  destination={{ latitude: -22.433883, longitude: -42.971805 }}
                  apikey={expo.android.config.googleMaps.apiKey}
                  strokeWidth={3}
                  strokeColor={cor.laranja_claro}
                  onReady={(result) => {
                    setDistancia(Math.floor(result.distance));
                    setDuracao(Math.floor(result.duration));
                  }}
                />
                <Marker
                  coordinate={{ latitude: -22.433883, longitude: -42.971805 }}
                  title="Entrega Produto A"
                  description="Em espera"
                  pinColor="#8CE563"
                />
              </Container>
            )}
          </MapView>
          <SafeAreaView>
            {ModalCustom(modalOpen, distancia, duracao, detalhes, setModalOpen, setDirection, setDetalhes)}
          </SafeAreaView>
        </Container>
      )}
    </Container>
  );
};

export default Mapa;


/*
{Marcadores.map((item) => ( 
 <Marker
                key={item.id}
                coordinate={item.local}
                title={item.titulo}
                description={item.descricao}
                pinColor={item.cor}
              />
              ))}
 */

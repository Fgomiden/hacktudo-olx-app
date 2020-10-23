import React, { useState, useEffect } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { expo } from "../app.json";
import { Container, ContCircular } from "../components/Constantes";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import Marcadores from "../Dados/Marcadores";
import { cor } from "../theme/Tema";
import { BotaoCinza } from "../components/Botoes";
import { TextoBranco, TextoPreto } from "../components/Textos";

const Mapa = () => {
  const [mapLoad, setMapLoad] = useState(false);
  const [direction, setDirection] = useState(false);
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      setUserLat(coords.latitude);
      setUserLon(coords.longitude);
      setMapLoad(true);
    })();
  }, []);

  // const onPressMarker = () => {
  //   return (
  //     <MapViewDirections
  //       origin={{ latitude: -22.518345, longitude: -42.977468 }}
  //       destination={{ latitude: -22.433883, longitude: -42.971805 }}
  //       apikey={expo.android.config.googleMaps.apiKey}
  //       strokeWidth={3}
  //       strokeColor={cor.laranja_claro}
  //       onReady={(result) => {
  //         console.log(`Distance: ${result.distance} km`);
  //         console.log(`Duration: ${result.duration} min.`);
  //       }}
  //     />
  //   );
  // };

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
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation
            showsCompass
            rotateEnabled
            style={{
              width: "100%",
              height: "100%",
              marginTop: 10,
            }}
          >
            {!direction ? (
              <Marker
                coordinate={{ latitude: -22.507931, longitude: -42.977372 }}
                title="Coleta Produto A"
                description="Em espera"
                pinColor="#F28000"
                onPress={() => setDirection(true)}
              />
            ) : (
              <Container>
                <Marker
                  coordinate={{ latitude: -22.507931, longitude: -42.977372 }}
                  title="Coleta Produto A"
                  description="Em espera"
                  pinColor="#F28000"
                />
                <MapViewDirections
                  origin={{ latitude: -22.507931, longitude: -42.977372}}
                  destination={{ latitude: -22.433883, longitude: -42.971805 }}
                  apikey={expo.android.config.googleMaps.apiKey}
                  strokeWidth={3}
                  strokeColor={cor.laranja_claro}
                  onReady={(result) => {
                    console.log(`Distance: ${result.distance} km`);
                    console.log(`Duration: ${result.duration} min.`);
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

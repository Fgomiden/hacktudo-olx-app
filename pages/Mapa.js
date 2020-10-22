import React, { useState, useEffect } from "react";
import { Container, ContCircular } from "../components/Constantes";
import MapView, { Marker }  from "react-native-maps";
import * as Location from "expo-location";
import Marcadores from "../Dados/Marcadores";
import { cor } from "../theme/Tema";
import { TextoPreto } from "../components/Textos";

const Mapa = () => {
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
    })();
  }, []);
console.log('latitude atual:', userLat);
console.log('longitude atual:', userLon);
  return (
    <Container bgCor="#FFF" flex={1}>
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
        }}
      >
        {Marcadores.map((item) => (
          <Marker
            key={item.id}
            coordinate={item.local}
            title={item.titulo}
            description={item.descricao}
            pinColor = {cor.laranja}
          />
        ))}
      </MapView>
    </Container>
  );
};

export default Mapa;

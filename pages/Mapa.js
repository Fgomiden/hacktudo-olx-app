import React, { useState, useEffect } from "react";
import {expo} from '../app.json';
import { Container, ContCircular } from "../components/Constantes";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
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
  //console.log("latitude atual:", userLat);
  //console.log("longitude atual:", userLon);
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
            pinColor={item.cor}
          />
        ))}
        <MapViewDirections
          origin={{latitude:userLat, longitude:userLon}}
          destination={{latitude:-22.518345, longitude:-42.977468}}
          apikey={expo.android.config.googleMaps.apiKey}
          strokeWidth={3}
          strokeColor={cor.preto}
        />
      </MapView>
    </Container>
  );
};

export default Mapa;

/*Liga um ponto a outro porem nao segue caminho certinho
<Polyline
          coordinates={[
            { latitude: -22.8025259, longitude: -42.4351431 },
            { latitude: -22.7896386, longitude: -42.421646 },
            { latitude: -22.7665248, longitude: -42.4161628 },
            { latitude: -22.7734153, longitude: -42.4577787 },
            { latitude: -22.7948605, longitude: -42.4596065 },
            { latitude: -22.8025259, longitude: -42.4351431 },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            "#E5845C",
            "#238C23",
            "#7F0000",
          ]}
          strokeWidth={6}
        />

        <MapViewDirections
          origin={{latitude:-22.518345, longitude:-42.977468}}
          destination={{latitude:-22.527691, longitude:-42.983133}}
          apikey={"AIzaSyBouEt-9Diyb6g0HhDxWKPWvUuA-grIHNo"}
          strokeWidth={3}
          strokeColor={cor.laranja}
        />
*/

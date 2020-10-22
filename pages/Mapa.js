import React, {useState, useEffect} from 'react';
import { Container, ContCircular } from "../components/Constantes";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { TextoPreto } from '../components/Textos';

const Mapa = () => {

  
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const { coords } = await Location.getCurrentPositionAsync();
      await setUserLat(coords.latitude);
      await setUserLon(coords.longitude);
    })();
  }, []);
console.log(userLon);
  return(
      <Container bgCor="#FFF" flex={1}>
          <MapView 
            region={{
              latitude: userLat,
              longitude: userLon,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            showsUserLocation
            showsCompass
            rotateEnabled
            style={{
              width:'100%', 
              height:'100%'
            }}
          />
      </Container>
  )
}

export default Mapa;
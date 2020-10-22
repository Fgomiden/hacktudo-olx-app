import React from 'react';
import { Container, ContCircular } from "../components/Constantes";
import MapView from 'react-native-maps';

const Mapa = () => {
  return(
      <Container bgCor="#FFF" flex={1}>
          <MapView style={{width:'100%', height:'100%'}}/>
      </Container>
  )
}

export default Mapa;
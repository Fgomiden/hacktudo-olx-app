import React from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Container, ContCircular } from "../components/Constantes";
import { TextoCinza, TextoPreto, TextoBranco } from "../components/Textos";
import { TextoInputCinza, TextoInputCinzaClaro } from "../components/Inputs";
import { BotaoLaranja } from "../components/Botoes";
import Slider from "@react-native-community/slider";
import { cor } from "../theme/Tema";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Dados from '../components/Dados'

const Gerenciamento = ({ navigation }) => {
    const CartaoEntrega = ({produto, endereco, status}) =>(
        <Container flex={1} bgCor={cor.cinza} direcao="column" style={{margin:10, borderRadius:10, height:100}}>
            <Container flex={0.3} direcao="row">
                <TextoPreto tamFonte="18">{produto}</TextoPreto>
            </Container>
            <Container flex={0.3} direcao="row">
                <TextoPreto tamFonte="18">{endereco}</TextoPreto>
            </Container>
            <Container flex={0.3} direcao="row">
                <TextoPreto tamFonte="18">{status}</TextoPreto>
            </Container>
        </Container>
    );
    const renderItem = ({ item }) => (
        <CartaoEntrega 
            produto={item.produto} 
            endereco={item.endereco} 
            status={item.status} 
        />
    );

  return (
    <Container flex={1} bgCor={cor.roxo}>
        <Container flex={0.2} justify="center" align="center">
            <TextoBranco tamFonte="23">Gerenciamento de Entregas</TextoBranco>
        </Container>
      <ContCircular
        flex={0.8}
        bgCor={cor.cinza_claro}
        bdTopLeft="35"
        bdTopRight="35"
        bdBottomLeft="0"
        bdBottomRight="0"
      >
          <Container flex={0.1} direcao="row" style={{marginHorizontal:15, marginVertical:5}}>
            <Container flex={0.5} align="flex-start" justify="center">
                <TextoPreto tamFonte="24">Hoje</TextoPreto>
            </Container>
            <Container flex={0.5} align="flex-end" justify="center">
                <BotaoLaranja largura="100" altura="35">
                    <TextoBranco tamFonte="25">0/4</TextoBranco>
                </BotaoLaranja>
            </Container>
          </Container>
        <SafeAreaView style={{flex:1}} >
            <FlatList
            data={Dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
      </ContCircular>
    </Container>
  );
};

export default Gerenciamento;

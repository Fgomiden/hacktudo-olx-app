import styled from 'styled-components/native'
import { View, Text, ImageBackground } from 'react-native';


export const Container =styled.View`
display:flex;
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`

export const ImagemEntrega = styled.ImageBackground`
  width: 100%;
  height:100%;
  `;

export const IniciarBotao= styled.TouchableOpacity`
position: absolute;
width: 269px;
height: 56px;
left: 50px;
top: 500px;;


align-items:center;
justify-content:center;

background: #F2F4F3;
border-radius: 10px;
`;

// export const telaRoxa= styled.View`
// position: absolute;
// width: 1011.5px;
// height: 731px;
// left: 0px;
// top: 0px;
// background: rgba(144, 39, 176, 0.5);
// `;

export const TextoIniciar= styled.Text`
font-size:25px;
font-weight:700;
align-items:center;
justify-content:center;

`

export const RetanguloLogin= styled.View`
position: absolute;
width: 365px;
height: 80%;
left: -2px;
top: 149px;
background-color: #F2F4F3;
border-top-right-radius: 35px;
border-top-left-radius: 35px;
`
export const RetanguloRoxoLogin= styled.View`
position: absolute;
width: 413px;
height: 138px;
left: 0px;
top: 0px;

background: #9027B0;

`

export const TextoInputLogin= styled.TextInput`
position: absolute;
width: 346px;
height: 46px;


background: rgba(196, 196, 196, 0.31);
border-radius: 10px;
`

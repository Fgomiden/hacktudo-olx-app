// import React from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
// import {Container, ImagemEntrega, IniciarBotao, RetanguloLogin, RetanguloRoxoLogin, telaRoxa, TextoIniciar, TextoInputLogin} from '../components/Constantes'
// import entregar from  '../assets/assets/entregar.png'

// const Login = ({navigation}) => {
//   return(
//       <Container navigation={navigation}>
//          {/* <CustomHeader title="Revista" isHome={true}  navigation={navigation}/> */}
//          <RetanguloRoxoLogin/>
//          <RetanguloLogin>
//          <View >
//               <Text>Email</Text>
//               <TextoInputLogin
//               placeholder=" Email"
//               />

//               <Text>Senha</Text>
//               <TextoInputLogin
//               placeholder=" Senha"
//               />
//       </View>
//    <IniciarBotao>
//      <TextoIniciar>Entrar</TextoIniciar>
//    </IniciarBotao>
      
//          </RetanguloLogin>
        
        
        
//       </Container>
//   ) 
// }

// export default Login;



import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView, TextInput } from 'react-native';

export default function Pag1() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={{flex:1, padding:10}}>
        <TextInput
        style={styles.input}
        placeholder=" Insira seu nome"
        multiline
        
        />
        <TextInput
        style={styles.input}
         placeholder=" Insira sua localidade"
        />
        <TextInput
        style={styles.input}
        placeholder=" Insira sua Data de Nascimento"
        />
        <TextInput
         style={styles.input}
        placeholder=" Insira seu email"
        />
        <TextInput
         style={styles.input}
        placeholder=" Insira sua senha"
        />
      </View>
   <TouchableOpacity
   style={styles.button}
   >
     <Text>Continuar</Text>
   </TouchableOpacity>
      </View> 
      </ScrollView>
  );
}

       
   
const styles = StyleSheet.create({
  container: {
        flex: 1,
        padding:50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
          width:150,
          height:50,
          borderRadius:5,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#008542'
      },
      buttonText:{
        color: '#003844',
        fontFamily: 'Open Sans',
      },
      avatar:{
        margin:0,
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
      },
  image:{
    width:100,
    height:100,
    resizeMode:'contain'
  },
  input: {
    margin: 15,
    height: 40,
    // borderWidth: 1,
    backgroundColor:'#E5E5E5', color:'#008542', borderRadius: 5
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 },

});
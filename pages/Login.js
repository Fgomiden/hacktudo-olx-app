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
import { RetanguloLogin } from '../components/Constantes';

export default function Login() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      
      
        <Text>Email</Text>
        <TextInput
         style={styles.input}
        placeholder=" Insira seu email"
        />
        <Text>Senha</Text>
        <TextInput
         style={styles.input}
        placeholder=" Insira sua senha"
        />
      
      <TouchableOpacity>
     <Text>Esqueceu a senha?</Text>
   </TouchableOpacity>
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
          backgroundColor:'#F28000'
      },
  input: {
    margin: 15,
    height: 40,
    // borderWidth: 1,
    backgroundColor:'#E5E5E5', color:'#008542', borderRadius: 5
 },
 
});
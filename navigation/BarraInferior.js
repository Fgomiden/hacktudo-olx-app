import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../pages/Perfil'
import { cor } from '../theme/Tema'

const BottomTab = createBottomTabNavigator();

const BarraInferior = () => {
  return(
    <BottomTab.Navigator 
        initialRouteName="Perfil"
        tabBarOptions={{
            activeTintColor: `${cor.laranja}`, 
            labelStyle: {
              fontSize: 12,
              textAlign:'center',
            },
        }}
    >
        <BottomTab.Screen name="Perfil" component={Perfil}/>
        <BottomTab.Screen name="Home" /*component={Home}*//>
        <BottomTab.Screen name="Gerenciar" /*component={Gerenciar}*//>
    </BottomTab.Navigator>
  );
}

export default BarraInferior;
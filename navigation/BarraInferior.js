import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "../pages/Perfil";
import Menu from "../pages/Menu";
import Mapa from "../pages/Mapa";
import Gerenciamento from "../pages/Gerenciamento";
import { cor } from "../theme/Tema";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const BarraInferior = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{
        activeTintColor: `${cor.laranja}`,
        labelStyle: {
          fontSize: 12,
          textAlign: "center",
        },
      }}
    >
      <BottomTab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          activeTintColor: `${cor.laranja}`,
          tabBarIcon: () =>
          <MaterialIcons name="person" size={25} color="black" />
        }} 
      />
      <BottomTab.Screen 
        name="Menu" 
        component={Menu}
        options={{
          tabBarIcon: () =>
          <FontAwesome5 name="home" size={25} color="black" />
        }}  
      />
      <BottomTab.Screen 
        name="Mapa" 
        component={Mapa}
        options={{
          tabBarIcon: () =>
          <FontAwesome5 name="map-marked-alt" size={25} color="black" />
        }}  
      />
      <BottomTab.Screen 
        name="Gerenciamento" 
        component={Gerenciamento}
        options={{
          tabBarIcon: () =>
          <FontAwesome5 name="boxes" size={25} color="black" />
        }}  
      />
    </BottomTab.Navigator>
  );
};

export default BarraInferior;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Menu from '../pages/Menu'
import BarraInferior from './BarraInferior'

const Stack = createStackNavigator()
const semHeader = () => ({
    headerShown:false
})
export default function Rotas(){
    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={Inicio} options={semHeader}/>
            <Stack.Screen name="Login" component={Login} options={semHeader}/>
            <Stack.Screen name="Menu" component={Menu} options={semHeader}/>
            <Stack.Screen name="Perfil" component={Perfil} options={semHeader}/>
            <Stack.Screen name="BarraInferior" children={BarraInferior}/>
        </Stack.Navigator>
    )
} 
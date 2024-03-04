import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfilScreen from '../Screens/ProfilScreen/ProfilScreen';
import mesLogements from '../Screens/ProfilScreen/MesLogements';
import MesCandidatures from '../Screens/ProfilScreen/MesCandidatures';
import JobScreen from '../Screens/JobScreen/JobScreen';

import DetailJobScreen from '../Screens/DetailJobScreen/DetailJobScreen';


const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="profil-screen" component={ProfilScreen} />
      <Stack.Screen name="mes-logements" component={mesLogements} />
      <Stack.Screen name="mes-candidatures" component={MesCandidatures} />
      <Stack.Screen name="detailJobScreen" component={DetailJobScreen} />
    </Stack.Navigator>
  )
}
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import MesCandidatures from '../Screens/ProfilScreen/MesCandidatures';
import JobScreen from '../Screens/JobScreen/JobScreen';
import DetailJobScreen from '../Screens/DetailJobScreen/DetailJobScreen';


const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="jobs" component={JobScreen} />
      <Stack.Screen name="mes-candidatures" component={MesCandidatures} />
      <Stack.Screen name="detailJobScreen" component={DetailJobScreen} />
    </Stack.Navigator>
  )
}
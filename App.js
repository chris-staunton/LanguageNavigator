import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TabBarIOS, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import Ionicons from 'react-native-vector-icons/Ionicons'; 

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
//Local imports 
import MainPage from './Components/MainPage';
import LandingPage from './Components/LoadingPage'; 
import NavigationStack from './Components/NavigationStack'


import DropdownMenu from './Components/DropdownMenu';

// Screens        
function HomeScreen() { 
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <DropdownMenu />   
     </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text  style={colours.white}>Settings page. </Text> 
    </View>
  );
}
const Tab = createBottomTabNavigator(); 


//Main app display 
export default function App() {
  return (
      <NavigationStack /> //Refer to NavigationStack component to see screens. 
    ); 
}

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
//Main app display 
export default function App() {
  return (
      <NavigationStack /> //Refer to NavigationStack component to see screens. 
    ); 
}

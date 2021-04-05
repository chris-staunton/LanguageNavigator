//Author: Theo
import React from 'react';
import { StyleSheet, TabBarIOS, Text, View, Button, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { StatusBar } from 'expo-status-bar';
//Local imports 
import HomeScreen from '../Screens/Home.js';
import AboutScreen from '../Screens/About.js';
import SettingsScreen from '../Screens/Settings.js';
import Header from './Header';


const Tab = createBottomTabNavigator(); //Bottom tabs (Home/Settings)

/*Main Page contains the two 'screens' (Home and Settings render functions) as well as the tabs to switch 
  between the two. 
  The NavigationContainer and the Header are essentially 'wrapped around' the Home and Settings screens. 
*/
export default class MainPage extends React.Component {
    
  componentDidMount()//Prevents the user from going back to intro/loading page
  {
    BackHandler.addEventListener('hardwareBackPress', () => true); 
  }
    render(){
        return(
        <NavigationContainer theme={NavDarkTheme}>
          <Header />
          <StatusBar style="auto" />
          <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName 
              if(route.name == 'Home'){
                iconName = focused ? 'home' : 'home-outline'; 
              } else if(route.name == 'About'){
                iconName = focused ? 'about' : 'information-circle-outline'; 
              }
              else if(route.name == 'Settings'){
                iconName = focused ? 'settings' : 'settings-outline'; 
              }
              return <Ionicons name={iconName} size={size} color={color} />; 
            }
          })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer> 
        );}
}   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(24, 24, 24)',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    header: {
      height: 90, 
      paddingTop: 60, 
      backgroundColor: 'rgb(51, 51, 51)'
    }, 
    title:{
      textAlign: 'center', 
      color: '#fff',
      fontSize: 15
    }
  });
  
  const colours = StyleSheet.create({
    white: {
      color: 'white'
    }
  }); 
  //Themes 
  //Navigation theme (dark mode)
  const NavDarkTheme = {
    dark: true, 
    colors: {
      primary: 'rgb(255, 255, 255)',
      background: 'rgb(24, 24, 24)',
      card: 'rgb(51, 51, 51)', 
      text: 'rgb(255, 255, 255)',
      border: 'rgb(33, 33, 33)', 
      notification: 'rgb(255, 69, 58)', 
    },
  }; 
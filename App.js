import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 

//Screens 
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={colours.white}>Home page.</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={colours.white}>Settings page.</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator(); 

//Main app display 
export default function App() {
  return (
    <NavigationContainer theme={NavDarkTheme}>
      <View style={styles.header}>
        <Text style={styles.title}>LanguagePal</Text>
      </View>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName 
          if(route.name == 'Home'){
            iconName = focused ? 'home' : 'home-outline'; 
          } else if(route.name == 'Settings'){
            iconName = focused ? 'settings' : 'settings-outline'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />; 
        }
      })}>
        <Tab.Screen name="Home" component={HomeScreen} tabBarIcon />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    ); 
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

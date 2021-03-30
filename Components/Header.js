import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
  return(
    <View style={styles.header}>
        <Text style={styles.title}>LanguagePal</Text>
      </View>
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
//Author: Theo
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={colours.white}>Settings page.</Text>
      </View>
    );
  }
  const colours = StyleSheet.create({
    white: {
      color: 'white'
    }
  }); 
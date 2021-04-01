
//Author: Tumi
import * as React from 'react';
import { View, StyleSheet, Platform, Button } from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from "react-native-dropdown-picker";


export default function DropdownMenu() {
  return (
    <View style={styles.container}>
  
      <View
        style={{
          ...(Platform.OS !== 'android' && {
            zIndex: 10
          })
          
        }}
      >
        <DropDownPicker
          items={[
            { label: 'English', value: 'english' },
            { label: 'French', value: 'french' },
            { label: 'Spanish', value: 'spanish' },
          ]}
          placeholder="Select Initial Language"
          containerStyle={{width: 300, height: 60}}
          style={{ backgroundColor: '#ffffff', color: "gray" }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          zIndex={20}
        />
 
        <DropDownPicker
          items={[
            { label: 'English', value: 'english' },
            { label: 'French', value: 'french' },
            { label: 'Spanish', value: 'spanish' },
          ]}
          placeholder="Select Language To Learn"
          containerStyle={{ width: 300, height: 100 }}
          style={{ marginTop: 40, backgroundColor: '#ffffff', color: "gray" }}
          dropDownStyle={{ backgroundColor: '#fafafa',  }}
          zIndex={10}
        />

        <View style={{marginTop: 50}}>
              <Button buttonStyle={{backgroundColor: "#1CB394", justifyContent: "center"}} title="Submit" ></Button>
        </View>

      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
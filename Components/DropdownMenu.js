//Author: Tumi
import * as React from 'react';
import { View, StyleSheet, Platform, Button, Pressable, Text} from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from "react-native-dropdown-picker";


export default function DropdownMenu(props) {
   const [source, setSource] = React.useState("");
   const [target, setTarget] = React.useState("");
  return (
    <View style={styles.container}>
  
      <View
        style={{
          ...(Platform.OS !== 'android' && {
            zIndex: 10
          }),  
        }}
      >
        <DropDownPicker
          items={[
            { label: 'English', value: 'english' },
            { label: 'French', value: 'french' },
            { label: 'Spanish', value: 'spanish' },
          ]}
          placeholder="Select Initial Language"
          containerStyle={{width: 300, height: 60, alignSelf: 'center'}}
          style={{ backgroundColor: '#ffffff', color: "gray", }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          zIndex={20}
          onChangeItem={item => props.changeSource(item.value)}
        />
 
        <DropDownPicker
          items={[
            { label: 'English', value: 'english' },
            { label: 'French', value: 'french' },
            { label: 'Spanish', value: 'spanish' },
          ]}
          placeholder="Select Language To Learn"
          containerStyle={{ width: 300, height: 100,alignSelf: 'center' }}
          style={{ marginTop: 40, backgroundColor: '#ffffff', color: "gray" }}
          dropDownStyle={{ backgroundColor: '#fafafa',  }}
          zIndex={10}
          onChangeItem={item => props.changeTarget(item.value)}
        />
        <View style={styles.buttonContainer}>
           <Pressable style={styles.button} onPress={props.func} title="GET STARTED">
               <Text style={{color: '#fff', alignSelf: 'center'}}>SUBMIT</Text>
            </Pressable>
        </View>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  button : {
   backgroundColor: 'rgb(51, 51, 51)', 
   padding: 20,
   paddingHorizontal: 0, 
   color: 'rgb(51, 51, 51)',
   fontSize: 18, 
   marginTop: 8,
   borderRadius: 12,
},
  buttonContainer:{
   justifyContent: 'center', 
   margin: 10, 
   padding: 10
},
});
//Author: Theo
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DropdownMenu from '../Components/DropdownMenu';

export default function HomeScreen() {
  const [words, setWords] = useState([
    {name: 'allowance', key: '1'},
    {name: 'aviation', key: '2'},
    {name: 'bachalor', key: '3'},
    {name: 'ballet', key: '4'},
    {name: 'bureau', key: '5'},
    {name: 'cadet', key: '6'},
    {name: 'champagne', key: '7'},
  ]);
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}/>
        <DropdownMenu></DropdownMenu>
          <View style={styles.scrollContainer}>
            <ScrollView>
              {words.map((item) => {
                return(
                 <View key={item.key}>
                  <Text style={styles.wordBox}>
                    {item.name}
                  </Text>
                 </View>
                 )
                 })}
           </ScrollView>
        </View>
      </View>
    );
  }
  const colours = StyleSheet.create({
    white: {
      color: 'white'
    }
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(24, 24, 24)',
    },
    buttonContainer : {
      backgroundColor: 'rgb(24, 24, 24)',
      flex: 0.40
    },
    scrollContainer : { 
      flex: 0.60, 
      width: '100%', 
      backgroundColor: 'rgb(33, 33, 33)',
      alignContent: 'flex-end',
    },
    wordBox : {
      color: '#fff',
      marginTop : 24, 
      padding: 30, 
      fontSize: 24,
    }, 
    wordContainer : {

    }, 
  });  
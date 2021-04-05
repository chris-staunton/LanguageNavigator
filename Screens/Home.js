//Author: Theo
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DropdownMenu from '../Components/DropdownMenu';

export default function HomeScreen() {
  const [words, setWords] = useState([
  ]);
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}/>
        <DropdownMenu func={() => {
                return fetch('https://lexicalanalyzer.azurewebsites.net/api/languagenavigator?mode=sample')
                  .then((response) => response.json())
                  .then((json) => {
                  
                    console.log(json)
                    setWords(json.list)
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}></DropdownMenu>
          <View style={styles.scrollContainer}>
            <ScrollView>
              {words.map((item) => {
                return(
                 <View key={item.index}>
                  <Text style={styles.wordBox}>
                    {item}
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
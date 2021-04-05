//Author: Theo
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DropdownMenu from '../Components/DropdownMenu';

export default function HomeScreen() {
  const [words, setWords] = useState([]);
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState([]);
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}/>
        <DropdownMenu changeSource = {(lang1)=>{setSource(lang1); console.log(lang1)}} changeTarget = {(lang2)=>{setTarget(lang2); console.log(lang2)}} func={() => {
                return fetch('https://lexicalanalyzer.azurewebsites.net/api/languagenavigator?mode=sample&source='+source+'&target='+target)
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
              <Text style={styles.wordBox}>{ words.length>0 && <p>Source: {source} {"\n"} Target: {target}</p>}</Text>
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
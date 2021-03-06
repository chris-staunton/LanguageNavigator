//Author: Theo
import React from 'react';
import { Button, StyleSheet, Text, View, BackHandler, Pressable } from 'react-native';

export default class AboutScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hi and welcome to LanguagePal
                    {"\n\n"}
                    LanguagePal is a language tool to assist people
                    with learning new languages and finding new ways to
                    easily learn similar words between languages. 
                    {"\n\n"}
                    In comparative linguistics, lexical relationship or genealogical proximity is the connection between languages, either the members of the same language family or the tradeoff between the languages due to cultural interactions. 
                    A language similarity would highlight the overlap between vocabularies in lexical, phonetical, and semantic aspects. Furthermore, it would indicate mutual intelligibility of the two languages up to an extent.
                    Such an analysis can reveal critical information about how the words evolve as they transition between languages. Moreover, the speakers of a given language may find it easier to learn similar strongly correlated languages. 
                    Such information can be used to emphasize the similarities between the languages and make recommendations to users who are willing to learn new languages. 
                    {"\n\n"}
                    Learn thousands of common words between two languages 
                    of your choice, helping you learn a new language quicker.
                </Text>
            </View>
        );}
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgb(24, 24, 24)', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text: {
        textAlign: 'center', 
        color: '#fff',
        fontSize: 15,
        maxWidth: '90%', 
    },
});
//Author: Theo
import React from 'react';
import { Button, StyleSheet, Text, View, BackHandler, Pressable } from 'react-native';

export default class IntroPage extends React.Component{
    componentDidMount()//Prevents the user from going back to intro/loading page
    {
    BackHandler.addEventListener('hardwareBackPress', () => true); 
    }
    buttonPress = () => {
        this.props.navigation.navigate('Home');
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topContainer} />
                <View style={styles.midContainer}>
                <Text style={styles.text}>
                    LanguagePal is a language tool to assist people
                    with learning new languages and finding new ways to
                    easily learn similar words between languages. 
                    {"\n\n"}
                    Learn thousands of common words between two languages 
                    of your choice, helping you learn a new language quicker.
                </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={this.buttonPress} title="GET STARTED">
                        <Text style={{color: '#fff'}}>GET STARTED</Text>
                    </Pressable>
                </View>
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
    topContainer: {
        flex: 2,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    midContainer: {
        flex: 3, 
        maxWidth: '80%',
        justifyContent: 'flex-start', 
        alignItems: 'center',
    },
    buttonContainer:{
        justifyContent: 'flex-end', 
        margin: 20, 
        padding: 10
    },
    text: {
        textAlign: 'center', 
        color: '#fff',
        fontSize: 15,
        maxWidth: '90%', 
    },
    button : {
        backgroundColor: 'rgb(51, 51, 51)', 
        padding: 20,
        paddingHorizontal: 50, 
        margin: 30,
        color: 'rgb(51, 51, 51)',
        fontSize: 18, 
        marginTop: 8,
        borderRadius: 12,
    },
});
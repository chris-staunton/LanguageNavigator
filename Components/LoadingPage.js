import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Animated, BackHandler } from 'react-native';
import Logo from '../assets/logo.png'; 

export default class LoadingPage extends Component{
    state ={
        LogoAnime: new Animated.Value(0), 
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', () => true); 
        const {LogoAnime, LogoText} = this.state; 
        Animated.parallel([
            Animated.spring(LogoAnime, 
                {
                toValue: 1, 
                tension: 10, 
                friction: 2, 
                duration: 1000, 
                useNativeDriver: false,
                }).start(), 

                Animated.timing(LogoText, {
                    toValue: 1, 
                    duration: 1200,
                    useNativeDriver: false,

                }),  
                   
            ]).start(() =>{
            this.setState({
                loadingSpinner: true,
            });
            setTimeout(()=>{
                this.props.navigation.navigate('Intro');
                }, 2000); 
        });
    }

    render(){
        return(
        <View style={styles.container}>
            <Animated.View style={{
                opacity: this.state.LogoAnime, 
                top: this.state.LogoAnime.interpolate({
                    inputRange: [0, 1], 
                    outputRange: [80, 0], 
                })
            }}>
            <Image source={Logo} style={{width: 200, height: 200}}/>
            {this.state.loadingSpinner ? (<ActivityIndicator style={{
                position: 'absolute',
                left: 0, 
                right: 0, 
                top: 300, 
                bottom: 0, 
                alignItems: 'center', 
                justifyContent: 'center', 
            }} size="large" color="#fff"/>) : null}
            </Animated.View>
            <Animated.View style={{opacity: this.state.LogoText}}>
                <Text style={styles.logoText}>LanguagePal</Text>
            </Animated.View>
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

    logoText: {
        textAlign: 'center', 
        color: '#fff',
        fontSize: 30
    }
}); 
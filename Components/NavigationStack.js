//Author: Theo
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationEvents } from 'react-navigation'; 
import LoadingPage from './LoadingPage'; 
import MainPage from './MainPage'; 
import IntroPage from './IntroPage'; 

/*The NavigationStack (i.e called HomeStack) contains all of the pages 
  of the app using a stack. The ordering of the stack is shown in the order 
  of the screens const below (Loading being at the top). 

  The 'Home' page (the MainPage component) contains the two screens (which are just render functions) of Home
  and Settings - found in the screens folder. 

  If adding a new page, please set the attribute headerShown to false in the navigationOptions attribute for the screen. 
*/
const screens = {
    Loading: {
      screen: LoadingPage,
      navigationOptions: {
        headerShown: false
      }
    },
    Intro: {
      screen: IntroPage, 
      navigationOptions: {
        headerShown: false
      }
    }, 
    Home: {
      screen: MainPage,
      navigationOptions: {
        headerShown: false
      }
    }
  }
  const HomeStack = createStackNavigator(screens); 

  export default createAppContainer(HomeStack);
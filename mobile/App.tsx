
import React from 'react';
import Home from './src/pages/Home'
import AppLoading from 'expo-app-loading'
import {Ubuntu_700Bold,useFonts} from '@expo-google-fonts/ubuntu'
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native';

import Routes from './src/routes';


export default function App() {
  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
        
    <Routes/>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

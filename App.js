import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/homeStack'


const getFonts = () => Font.loadAsync({
    'ChelseaMarket-Regular': require('./assets/fonts/ChelseaMarket-Regular.ttf')

  });


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
{
  if(fontsLoaded){
  return (
    <Navigator />
  );
  }
  else{
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish= {() => setFontsLoaded(true)} />
    );
  }
}
}



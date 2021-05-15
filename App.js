
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
// import {useScreens} from 'react-native-screens';

import AppNavigation from './navigation/AppNavigation.js';



export default function App() {


  const [loaded] = useFonts({
    'lora-regular': require('./assets/fonts/LoraRegular.ttf'),
    'lora-italic': require('./assets/fonts/LoraItalic.ttf'),
    'lora-regular-italic': require('./assets/fonts/LoraRegularItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <AppNavigation/>
  

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'lora-italic',
    fontSize: 30
  }
});

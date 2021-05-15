// komponenta koja sluzi za navigaciju kroz app
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen.js';
import PostScreen from '../screens/PostScreen.js';
import SkinCategoryScreen from '../screens/SkinCategoryScreen';
import LoginScreen from '../screens/LoginScreen.js';
const AppNavigation = createStackNavigator({
    // identifikator: vrednost (pointer na react komponentu koju zelim da prikazem: screen) 
    Login: LoginScreen,
    Home: HomeScreen, //HomeScreen ce dobiti u props navigation objekat
    SkinCategory: {
        screen: SkinCategoryScreen
    },
    CategoryPost: PostScreen,
},
    { headerLayoutPreset: 'center' }
    ,
    {
        // mode: 'modal',
        defaultNavigationOptions: {
            headerTitleStyle: {
                fontFamily: 'lora-italic',
            }
        }
    }
);

export default createAppContainer(AppNavigation);
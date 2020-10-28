import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import building from '../../../assets/building.png'


import style from './styles'

function AppLoading() {
    return (
        <ImageBackground source={building} style={style.image}>
            <View style={style.container}/>
        </ImageBackground>
    );
}

export default AppLoading;
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

import building from '../../../assets/building.png'

function LandingPage() {
    const { navigate } = useNavigation();

    function handleNavigateToAccount() {
        navigate('CompanyLogin')
    }

    function handleNavigateToUserLogin() {
        navigate('UserLogin')
    }

    return (
        <View style={style.container}>
            <ImageBackground source={building} style={style.image}>
                <View style={{ padding: 20, justifyContent: 'space-around', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.80)' }}>
                    <Text style={style.containerText}>Deseja entrar como</Text>
                    <View style={style.buttonGroup}>
                        <TouchableHighlight onPress={handleNavigateToUserLogin}>
                            <View style={style.button}>
                                <Feather name="user" size={30} color="#333" />
                                <Text style={style.buttonText}>Usuário</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={handleNavigateToAccount}>
                            <View style={{ ...style.button, borderColor: '#FFF', borderWidth: 3, backgroundColor: 'transparent' }}>
                                <Feather name="briefcase" size={30} color="white" />
                                <Text style={{ ...style.buttonText, color: 'white' }}>Negócios</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default LandingPage;
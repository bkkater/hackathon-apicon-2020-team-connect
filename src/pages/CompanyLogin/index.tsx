import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import building from '../../../assets/building.png'
import logo from '../../../assets/logo-label.png'

import style from './styles'
import Input from '../../components/Input';

function CompanyLogin() {
    const { navigate } = useNavigation();

    function handleNavigateToNext() {
        navigate('CompanyMenuTabs')
    }
    return (
        <ImageBackground source={building} style={style.image}>
            <View style={{ paddingVertical: 50, paddingHorizontal: 20, flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.80)', justifyContent: 'space-around' }}>
                <Image source={logo} style={{ alignSelf: 'center' }} />
                <View>
                    <View style={style.inputIcon}>
                        <Input label='Seu acesso' type='emailAddress' />
                        <Feather name="user" size={28} color="#EAEAEA" style={style.icon} />
                    </View>

                    <View style={style.inputIcon}>
                        <Input label='Senha' type='password' />
                        <Feather name="lock" size={28} color="#EAEAEA" style={style.icon} />
                    </View>

                    <Text style={{ ...style.buttonText, alignSelf: 'flex-end', color: '#EAEAEA' }}>Esqueci minha senha</Text>

                    <RectButton style={style.button} onPress={handleNavigateToNext}>
                        <Text style={style.buttonText}>Entrar</Text>
                    </RectButton>
                </View>

            </View>
        </ImageBackground>
    );
}

export default CompanyLogin;
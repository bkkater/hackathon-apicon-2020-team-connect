import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles';

import logo from '../../../assets/home-logo.png'
import qrCode from '../../../assets/qr-code.png'

interface HomeHeaderProps {
    qr: boolean
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ qr }) => {
    if (qr) {
        return (
            <View style={style.profileHeader}>
                <Image source={logo} />
                <Image source={qrCode} />
            </View>
        );
    }

    return (
        <View style={style.profileHeader}>
            <Image source={logo} />
        </View>
    );

}

export default HomeHeader;
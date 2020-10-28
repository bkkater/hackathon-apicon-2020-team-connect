import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import style from './styles'

import paper from '../../../assets/photo-paper.png'
import cake from '../../../assets/photo-cake.png'


interface TypeCardProps {
    label: string;
    image_uri: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ label, image_uri }) => {
    return (
        <View style={style.container}>
            <ImageBackground source={{ uri: image_uri}} style={style.image} borderRadius={10}>
                <View style={style.content}>
                    <Text style={style.contentText}>{label}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default TypeCard;
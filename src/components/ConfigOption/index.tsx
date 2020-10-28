import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';


import style from './styles';
import { RectButton } from 'react-native-gesture-handler';

interface ConfigOptionProps {
    name: string,
    description: string,
    icon: string,
    onPress?(): void
}

const ConfigOption: React.FC<ConfigOptionProps> = ({ name, description, icon, onPress }) => {

    if (description === '') {
        return (
            <RectButton style={style.optionBox} onPress={onPress}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Feather name={icon} size={30} color="#323232" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={style.optionText}>{name}</Text>
                    </View>
                </View>

                <Feather name='chevron-right' size={24} color="#323232" />
            </RectButton>
        )
    }
    return (
        <View style={style.optionBox}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Feather name={icon} size={30} color="#323232" />
                <View style={{ marginLeft: 10 }}>
                    <Text style={style.optionText}>{name}</Text>
                    <Text style={style.optionDescription}>{description}</Text>
                </View>
            </View>

            <Feather name='chevron-right' size={24} color="#323232" />
        </View>
    )
}

export default ConfigOption;
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
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
            <TouchableHighlight style={style.optionBox} onPress={onPress} underlayColor="#e7e7e7">
                <View style={{ flexDirection: 'row' , justifyContent: 'space-between', width: '100%'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Feather name={icon} size={30} color="#323232" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={style.optionText}>{name}</Text>
                        </View>
                    </View>

                    <Feather name='chevron-right' size={24} color="#323232" style={{marginTop: 5}}/>
                </View>
            </TouchableHighlight >
        )
    }
    return (
        <TouchableHighlight style={style.optionBox} onPress={onPress} underlayColor="#e7e7e7">
            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', width: '100%'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Feather name={icon} size={30} color="#323232" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={style.optionText}>{name}</Text>
                        <Text style={style.optionDescription}>{description}</Text>
                    </View>
                </View>

                <Feather name='chevron-right' size={24} color="#323232" style={{marginTop: 5}}/>
            </View>
        </TouchableHighlight >
    )
}

export default ConfigOption;
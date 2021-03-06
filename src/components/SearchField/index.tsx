import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import style from './styles'

import { TextInput } from 'react-native-gesture-handler';


interface SearchFieldProps {
    placeholder: string;
    user: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({ placeholder, user }) => {
    return (

            <View style={style.field}>
                <Feather name={user ? 'user' : 'search'}size={24} color="#959595" />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor='#8B8B8B'
                    style={style.textInput}
                />
            </View>
    )
}

export default SearchField;
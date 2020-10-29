import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

import style from './styles'

interface MessageProps {
    name: string;
    messageContent: string;
    isNew: boolean
}

const Message: React.FC<MessageProps> = ({ name, messageContent, isNew }) => {
    const { navigate } = useNavigation();

    function handleNavigateToChat() {
        navigate('Chat')
    }

    return (
        <View>
            <View style={style.message}>
                <View style={isNew ? {...style.newMessage} : {...style.newMessage, display: 'none'}}/>
                <View style={style.messageHeader}>
                    <Text style={style.messageText}>{name}</Text>
                    <BorderlessButton onPress={handleNavigateToChat}>
                        <Feather name="arrow-right-circle" size={24} color="#016EC2" />
                    </BorderlessButton>

                </View>

                <View style={style.messageContent}>
                    <Text>{messageContent}</Text>
                </View>

            </View>
            <View style={style.hr}/>
        </View>
    )
}

export default Message;
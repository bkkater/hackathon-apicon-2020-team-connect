import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

const ProfileInstagram: React.FC = () => {
    return (
        <View style={style.container}>
            <View style={{justifyContent: 'space-between', flex: 1}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                    <Text style={style.contentText}>Instagram</Text>
                    <Feather name="external-link" size={16} color="black" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 3 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={style.contentNumberText}>29</Text>
                        <Text style={style.contentText}>Posts</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={style.contentNumberText}>334</Text>
                        <Text style={style.contentText}>Seguidores</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={style.contentNumberText}>230</Text>
                        <Text style={style.contentText}>Seguindo</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ProfileInstagram;
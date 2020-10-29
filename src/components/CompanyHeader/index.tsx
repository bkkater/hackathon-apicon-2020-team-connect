import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import style from './styles';

interface CompanyHeaderProps {
    user: string
    goBackButton: boolean
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ user, goBackButton }) => {
    const { goBack } = useNavigation();
    if (goBackButton) {
        return (
            <View style={style.profileHeader}>
                <View style={{ paddingHorizontal: 15, justifyContent: 'space-between' }}>
                    <BorderlessButton onPress={goBack} style={style.goBack}>
                        <Text style={style.bio}>voltar</Text>
                    </BorderlessButton>

                    <View>
                        <Text style={style.bio}>{user}</Text>
                    </View>

                </View>
                <View style={{ borderBottomColor: '#e2dcdc', borderBottomWidth: 1, width: '100%' }} />
            </View>
        );
    }
    return (
        <View style={style.profileHeader}>
            <Text style={style.bio}>{user}</Text>
            <View style={{ borderBottomColor: '#e2dcdc', borderBottomWidth: 1, width: '100%' }} />
        </View>
    );

}

export default CompanyHeader;
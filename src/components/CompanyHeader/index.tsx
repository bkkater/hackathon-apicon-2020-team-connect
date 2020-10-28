import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

interface CompanyHeaderProps {
    user: string
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({user}) => {
    return (
        <View style={style.profileHeader}>
            <Text style={style.bio}>{user}</Text>
            <View style={{ borderBottomColor: '#e2dcdc', borderBottomWidth: 1, width: '100%' }} />
        </View>
    );
}

export default CompanyHeader;
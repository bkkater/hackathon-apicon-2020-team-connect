import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

const CompanyHeader: React.FC = () => {
    return (
        <View style={style.profileHeader}>
            <Text style={style.bio}>@malubolos</Text>
            <View style={{ borderBottomColor: '#e2dcdc', borderBottomWidth: 1, width: '100%' }} />
        </View>
    );
}

export default CompanyHeader;
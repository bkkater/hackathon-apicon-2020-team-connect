import * as React from 'react';
import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

interface InputProps {
    label: string,
    type: string,
    style?: StyleProp<ViewStyle>
}

const Input: React.FC<InputProps> = ({ label, type, style }, props) => {
    const [value, setValue] = useState('');
    const { colors } = useTheme();

    return (
        <TextInput
            {...props}
            label={label}
            theme={colors.primary === "#fff"}
            value={value}
            onChangeText={(value: React.SetStateAction<string>) => setValue(value)}
            style={[{ backgroundColor: colors.text + "00", marginBottom: 20, color: '#FFF' }, style]}
            underlineColor='#FFF'
            textContentType={type}
            secureTextEntry={type == 'password' ? true : false}
            maxLength= {30}
        />
    );
}

export default Input;
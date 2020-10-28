import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    optionBox: {
        borderBottomWidth: 1, 
        borderBottomColor: '#E0E0E0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        minHeight: 82
    },
    optionText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#323232',
        fontSize: 18,
        marginBottom: 2
    },
    optionDescription: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#A0A0A0',
        fontSize: 14,

    }
})

export default styles;
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionTitle: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 20,
        marginVertical: 30,
        marginHorizontal: 20
    },
    map: {
        width: Dimensions.get('window').width,
        height: '50%',
    },
    date: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#A0A0A0'
    },
    produtName: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        marginTop: 10
    },
    produtPrice: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 14,
        color: '#05B88A'
    },
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
});


export default styles;
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,   
        backgroundColor: '#e8e8e8',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    content: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    companyName: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
    },
    companyUser: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 14,
        color: '#A0A0A0',
        marginTop: 2
    },
    amount: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 17,
        color: '#A0A0A0',
        width: 15,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 3
    },
    footer: {
        backgroundColor: '#323232',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    }
})

export default styles;
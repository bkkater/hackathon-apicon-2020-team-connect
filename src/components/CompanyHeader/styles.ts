import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileHeader: {    
        height: 90,
        justifyContent: 'flex-end',
        backgroundColor: '#f0f0f0'
    },
    bio: {
        marginTop: 0,
        marginBottom: 15,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        lineHeight: 21,
        alignSelf: 'center',
    },
    goBack: {
        position: 'absolute',
        left: 20,
        alignItems: "center",
        justifyContent: 'center',
    }
})

export default styles;
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    profileHeader: {
        alignItems: 'center',
        height: 90,
        justifyContent: 'flex-end'
    },
    profileDescription: {
        marginBottom: 15
    },
    profileName: {
        marginTop: 2
    },
    profileNameText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 22,
        color: '#323232'
    },
    profileLocation: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 20,
        color: '#757575',
        marginTop: 2
    },
    profileType: {
        backgroundColor: '#323232',
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 7,
        marginTop: 11,
        width: '40%'
    },
    profileTypeText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF'
    },
    bio: {
        marginTop: 0,
        marginBottom: 15,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        lineHeight: 21,
    },
    hashtag: {
        color: '#0068B8',
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15
    },
})

export default styles;
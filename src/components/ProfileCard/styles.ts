import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor:'#E0E0E0'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "cover",    
    },
    content: {
        marginLeft: 15,
        justifyContent: 'space-between',
        height: 70
    },
    contentText: {
        fontFamily: 'Ubuntu_400Regular'
    },
    profileType: {
        backgroundColor: '#323232',
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: '90%',
    },
    profileTypeText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF'
    },
})

export default styles;
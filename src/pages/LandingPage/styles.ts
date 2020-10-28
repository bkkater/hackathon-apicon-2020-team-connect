import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 26,
        color: 'white',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#EAEAEA',
        paddingVertical: 8,
        paddingHorizontal: 18,
        height: 150,
        width: 155,
        borderRadius: 10,
        justifyContent: 'space-around',
    },
    buttonText: {
        color: '#333',
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 18
    },
    versionText: {
        color: '#565656',
        position: "absolute",
        bottom: -350,
        left: 150
    },
    icon: {
        bottom: -350,
        left: 320
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-around"
    }
})

export default styles;
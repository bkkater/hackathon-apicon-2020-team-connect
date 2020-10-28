import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EAEAEA',
        padding: 18,
        margin: 35,
        marginTop: 30,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: 255
    },
    buttonText: {
        color: '#333',
        fontFamily: 'Ubuntu_500Medium'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-around"
    },
    inputIcon: {
        position: "relative",
    },
    icon: {
        position: "absolute",
        right: 15,
        bottom: 42
    }

})

export default styles;
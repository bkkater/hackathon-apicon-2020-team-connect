import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    content: {
        alignItems: "center"
    },
    date: {
        marginTop: 15
    },
    boxMessage: {
        margin: 20,
        position: "relative"
    },
    messageText: {
        marginTop: 10,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        lineHeight: 20
    },
    messageDescription: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#949494',
        marginTop: 10,
        marginBottom: 22
    },
    messageLink: {
        color: '#0091FF'
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#949494',
        width: width,
    },
    time: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#323232',
        position: "absolute",
        bottom: 0,
        right: 20
    },
    lastMessageText: {
        marginTop: 10,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        lineHeight: 20,
        marginBottom:22
    },
    textInput: {
        padding: 15
    },
    field: {
        borderBottomWidth: 1,
        borderBottomColor: '#323232',
        width: width-50,
    },
    textInputContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    send: {
        marginRight: 20
    },
    box: {
        marginBottom: -70,
    },
    image: {
        margin: 20,
        marginTop: 40
    },
    input: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 10,
        left: 20
    }
})

export default styles;
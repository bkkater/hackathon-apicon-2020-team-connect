import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    message: {
        margin: 30,
        marginTop: 10,
        marginBottom: 20
    },
    messageHeader: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 10
    },
    messageText: {
        fontFamily: 'Ubuntu_500Medium',
    },
    messageContent:{
        backgroundColor: '#E2E2E2',
        padding: 15,
        borderRadius: 8
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#949494',
    },
    newMessage: {
        position: 'absolute',
        height: 12,
        width: 12,
        borderRadius: 50,
        backgroundColor: '#EFCA46',
        left: -20,
        bottom: 0,
    }
})

export default styles;
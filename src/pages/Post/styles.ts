import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        margin: 20,
        marginTop: 40
    },
    imageBlock: {
        height: 184,
        backgroundColor: '#fafafa'
    },
    cake: {
        marginTop: -1
    },
    fieldGroup: {
        flexDirection: 'row',
        margin: 20,
    },
    productName: {
        width: 200,
        height: 44,
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        padding: 10
    },
    productPrice: {
        flex: 1,
        height: 44,
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        padding: 10,
        marginLeft: 10
    },
    section: {
        margin: 20,
        marginTop: 10
    },
    sectionTitle: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18
    },
    productDescription: {
        marginTop: 10,
        width: 343,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        padding: 10,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        alignSelf: "flex-start",
    },
    percentInput: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#E9E9E9',
        justifyContent: 'space-around',
        width: 115,
        borderRadius: 8
    },
    inputText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#424242'
    },
    difInputText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#C4C4C4'
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#949494',
    },
    option: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10
    },
    optionDescription: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionDescriptionText: {
        marginLeft: 10
    },
    button: {
        backgroundColor: '#000',
        padding: 18,
        marginRight: 20,
        width: 200,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 8,
        alignSelf: "flex-end",
        marginBottom: 150
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular'
    },
})

export default styles;
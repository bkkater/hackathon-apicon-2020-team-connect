import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 80, 
        borderRadius: 10,   
        marginRight: 10
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "cover",    
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.44)',
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 15,
        borderRadius: 10,   
    },
    contentText: {
        fontFamily: 'Ubuntu_500Medium',
        color: 'white',
        fontSize: 18
    }
})

export default styles;
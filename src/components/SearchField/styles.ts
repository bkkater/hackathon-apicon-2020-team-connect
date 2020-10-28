import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    field: {
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: '#E4E4E4',
       borderRadius: 10,
       padding: 12,
       marginBottom: 20
    },
    textInput: {
        marginLeft: 10
    },
})

export default styles;
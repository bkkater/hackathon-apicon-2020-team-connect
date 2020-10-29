import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableHighlight, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

// import { Container } from './styles';

const ImagePickerComponent: React.FC = () => {
    const [image, setImage] = useState('');

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                image !== '' ? (
                    <TouchableHighlight
                        style={{ height: 300, width: '100%', justifyContent: 'center' }}
                        onPress={pickImage}
                    >
                        <Image source={{ uri: image }} style={{ width: '100%', height: 300 }} />
                    </TouchableHighlight>
                ) : (

                        <TouchableHighlight
                            style={{ backgroundColor: '#2D2D2D', height: 300, width: '100%', justifyContent: 'center' }}
                            onPress={pickImage}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Feather name="plus-square" size={50} color="white" />
                                <Text style={{ fontFamily: 'Ubuntu_400Regular', color: 'white', marginTop: 10 }}>Clique para adicionar uma imagem</Text>
                            </View>
                        </TouchableHighlight>
                    )
            }

        </View>
    );
}

export default ImagePickerComponent;
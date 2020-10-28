import React from 'react';
import { View, Image } from 'react-native';

import style from './styles';

import image1 from '../../../assets/feed/1.png'
import image2 from '../../../assets/feed/2.png'
import image3 from '../../../assets/feed/3.png'
import image4 from '../../../assets/feed/4.png'
import image5 from '../../../assets/feed/5.png'
import image6 from '../../../assets/feed/6.png'
import image7 from '../../../assets/feed/7.png'
import image8 from '../../../assets/feed/8.png'
import image9 from '../../../assets/feed/9.png'
import stories from '../../../assets/storie1.png'


const ProfileImages: React.FC = () => {
    return (
        <View>
            <Image source={stories} style={{marginLeft: 20}}/>
            <View style={{...style.imageGroup, marginTop: 10 }}>
                <Image source={image1} style={style.image}></Image>
                <Image source={image2} style={style.image} ></Image>
                <Image source={image3} style={style.image} ></Image>
            </View>

            <View style={style.imageGroup}>
                <Image source={image4} style={style.image}></Image>
                <Image source={image5} style={style.image}></Image>
                <Image source={image6} style={style.image}></Image>
            </View>

            <View style={style.imageGroup}>
                <Image source={image7} style={style.image}></Image>
                <Image source={image8} style={style.image}></Image>
                <Image source={image9} style={style.image}></Image>
            </View>
        </View>
    );
}

export default ProfileImages;
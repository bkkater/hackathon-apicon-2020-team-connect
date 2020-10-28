import React from 'react';
import { Image, View, Text } from 'react-native';

import style from './styles'

import { RectButton } from 'react-native-gesture-handler';


interface ProfileCardProps {
    companyProfile: {
        image_uri: string;
        distance: string;
        name: string;
        type: string;
        user: string;
    },
}

const ProfileCard: React.FC<ProfileCardProps> = ({ companyProfile }) => {
    return (
        <View style={style.profileContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: companyProfile.image_uri }} style={{ height: 70, width: 70 }} borderRadius={50} />
                <View style={style.content}>
                    <Text style={{ ...style.contentText, fontFamily: 'Ubuntu_500Medium' }}>{companyProfile.user}</Text>
                    <Text style={{ ...style.contentText, color: '#959595' }}>{companyProfile.name}</Text>

                    <RectButton style={style.profileType}>
                        <Text style={style.profileTypeText}>{companyProfile.type}</Text>
                    </RectButton>
                </View>
            </View>

            <Text style={{ ...style.contentText, alignSelf: 'flex-start' }}>{companyProfile.distance}</Text>
        </View>
    );
}

export default ProfileCard;
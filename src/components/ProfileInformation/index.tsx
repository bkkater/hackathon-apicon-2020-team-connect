import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import logo from '../../../assets/malucakeslogo.png'
import ProfileInstagram from '../ProfileInstagram';

import style from './styles';

const ProfileInformation: React.FC = () => {
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#EEE' }}>
            <View style={style.profileDescription}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image source={logo} style={{ marginLeft: -8 }} />
                    <ProfileInstagram/>
                </View>

                <View style={style.profileName}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '52%' }}>
                        <Text style={style.profileNameText}>Malu Bolos</Text>
                        <Text style={style.profileLocation}>3m</Text>
                    </View>

                    <RectButton style={style.profileType}>
                        <Text style={style.profileTypeText}>Bolos</Text>
                    </RectButton>
                </View>

            </View>

            <Text style={style.bio}>Bolos caseiros sob encomenda. Aqui fazemos com muito amor para deixar sua festa mais feliz.</Text>

            <Text style={style.hashtag}>#abacaxi    #brigadeiro    #bolodefestas</Text>

            <RectButton style={{ ...style.profileType, width: '100%' }}>
                <Text style={style.profileTypeText}>Editar perfil</Text>
            </RectButton>

            <View style={{ flexDirection: 'row', flex: 1 }}>
                <RectButton style={{ ...style.profileType, marginRight: 5, width: '32.3%', backgroundColor: '#0091FF' }}>
                    <Text style={style.profileTypeText}>Anúncios</Text>
                </RectButton>

                <RectButton style={{ ...style.profileType, marginRight: 5, width: '32.3%' }}>
                    <Text style={style.profileTypeText}>Informações</Text>
                </RectButton>

                <RectButton style={{ ...style.profileType, width: '32.3%' }}>
                    <Text style={style.profileTypeText}>Contatos</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default ProfileInformation;
import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

import CompanyHeader from '../../components/CompanyHeader';
import { Feather } from '@expo/vector-icons';

import style from './styles';
import ConfigOption from '../../components/ConfigOption';
import { useNavigation } from '@react-navigation/native';

const UserConfig: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigateToMessages = () => {
    navigate('Messages')
  }

  return (
    <ScrollView>
      <CompanyHeader user='@paulinhacptg' goBackButton={false}/>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
          <Feather name="user" size={40} color="black" />

          <View style={{ width: '100%', marginLeft: 15 }}>
            <Text style={style.profileNameText}>Paula Tavares</Text>
          </View>
        </View>

        <View>
          <ConfigOption name='Mensagens' description='Minhas conversas' icon='message-circle' onPress={handleNavigateToMessages} />
          <ConfigOption name='Minha conta' description='Configurações do perfil' icon='edit' />
          <ConfigOption name='Carteira' description='Meu saldo e QR Code' icon='credit-card' />
          <ConfigOption name='Configurações' description='' icon='settings' />
          <ConfigOption name='Ajuda' description='' icon='help-circle' />
          <ConfigOption name='Sair' description='' icon='log-out' />
        </View>

      </View>
    </ScrollView>
  );
}

export default UserConfig;
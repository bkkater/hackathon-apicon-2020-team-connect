import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

import CompanyHeader from '../../components/CompanyHeader';

import logo from '../../../assets/malucakeslogo.png'

import style from './styles';
import { RectButton } from 'react-native-gesture-handler';
import ConfigOption from '../../components/ConfigOption';
import { useNavigation } from '@react-navigation/native';

const options = [
  {
    id: "04",
    name: "Controle financeiro",
    description: 'Meu planejameto',
    icon: 'trending-up'
  },
  {
    id: "05",
    name: "Configurações",
    description: '',
    icon: 'settings'
  },
  {
    id: "06",
    name: "Ajuda",
    description: '',
    icon: 'help-circle'
  },
  {
    id: "07",
    name: "Sair",
    description: '',
    icon: 'log-out'
  }
]

const CompanyConfig: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigateToMessages = () => {
    navigate('Messages')
  }

  const handleNavigateToLanding = () => {
    navigate('LandingPage')
  }
  return (
    <ScrollView>
      <CompanyHeader user='@malubolos' goBackButton={false}/>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={logo} />

          <View style={{ width: '100%', marginBottom: 15, marginLeft: 15 }}>
            <Text style={style.profileNameText}>Malu Bolos</Text>
            <RectButton style={style.profileType}>
              <Text style={style.profileTypeText}>Bolos</Text>
            </RectButton>
          </View>
        </View>

        <View>
          <ConfigOption name='Mensagens' description='Minhas conversas' icon='message-circle' onPress={handleNavigateToMessages}/>
          <ConfigOption name='Minha conta' description='Configurações do perfil' icon='edit' />
          <ConfigOption name='Carteira' description='Meu saldo e QR Code' icon='credit-card' />
          <ConfigOption name='Controle financeiro' description='Meu planejameto' icon='trending-up' />
          <ConfigOption name='Configurações' description='' icon='settings' />
          <ConfigOption name='Ajuda' description='' icon='help-circle' />
          <ConfigOption name='Sair' description='' icon='log-out' onPress={handleNavigateToLanding} />
        </View>

      </View>
    </ScrollView>
  );
}

export default CompanyConfig;
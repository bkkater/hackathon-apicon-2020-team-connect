import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import CompanyHeader from '../../components/CompanyHeader';

import style from './styles';

const ProductDetails: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigationToPayment() {
    navigate('Payment')
  }

  function handleNavigationToChat() {
    navigate('Chat')
  }

  return (
    <View>
      <CompanyHeader goBackButton={true} user='@malubolos' />

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
        style={{ width: '100%', height: '55%' }}
      />
      <View style={{ padding: 20, justifyContent: 'space-between'}}>
        <Text style={style.titleText}>Torta de frutas vermelhas</Text>

        <Text style={style.tinyText}>
          "Torta de frutas vermelhas de 2kg feita com muito amor em nossas cozinha. Uma adaptação do famoso cheesecase. Peça já o seu e venha buscar."
        </Text>

        <Text style={{ ...style.tinyText, color: '#0091FF' }}>
          #cheesecake    #frutasvermelhas   #chocolate
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{...style.tinyText, fontSize: 17}}>Preço médio:</Text>

          <Text style={{...style.tinyText, fontSize: 17, marginLeft: 10, color: '#EF321F' }}>R$ 200,00</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <RectButton onPress={handleNavigationToPayment} style={style.button}>
            <Text style={style.buttonText}>Comprar</Text>
          </RectButton>

          <RectButton onPress={handleNavigationToChat} style={{...style.button, marginLeft: 20, backgroundColor: '#333'}}>
            <Text style={style.buttonText}>Mensagem</Text>
          </RectButton>
        </View>

      </View>
    </View>
  );
}

export default ProductDetails;
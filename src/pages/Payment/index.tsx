import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import CompanyHeader from '../../components/CompanyHeader';
import Map from '../../components/Map';

import style from './styles';

import payment01 from '../../../assets/elo.png'
import payment02 from '../../../assets/digital.png'
import payment03 from '../../../assets/boleto.png'
import payment04 from '../../../assets/qr-icon.png'
import payment05 from '../../../assets/pix.png'
import payment06 from '../../../assets/credit.png'


const paymentsOptions = [
  {
    id: '01',
    image: payment01,
    name: 'Pagamento elo'
  },
  {
    id: '02',
    image: payment02,
    name: 'Transação digital'
  }, {
    id: '03',
    image: payment03,
    name: 'Boleto'
  },
  {
    id: '04',
    image: payment04,
    name: 'Gerar qrCode'
  },
  {
    id: '05',
    image: payment05,
    name: 'Pix'
  },
  {
    id: '06',
    image: payment06,
    name: 'Cartão de crédito'
  }
]

const Payment: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <ScrollView style={{ flex: 1 }}>
      <CompanyHeader user='Pagamento' goBackButton={true} />

      <Text style={style.sectionTitle}>Malu Bolos</Text>

      <View style={{ maxHeight: 200 }}>
        <Map />
      </View>

      <View style={{ padding: 20 }}>
        <Text>Rua das Laranjeiras</Text>
        <Text>- Boa viagem, Recife - PE</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ ...style.sectionTitle, marginHorizontal: 0 }}>Opções de entrega</Text>
          <Text style={style.date}>2h - 2h 30min</Text>
        </View>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1(!checked1);
              }} />
            <Text>Retirar no local</Text>
          </View>
          <Text>Frete R$ 0,00</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2(!checked2);
              }} />
            <Text>Retirar no local</Text>
          </View>
          <Text>Frete R$ 7,00</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DBDBDB', marginTop: 20 }} />

        <Text style={{ ...style.sectionTitle, marginHorizontal: 0 }}>Pedido</Text>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={style.produtName}>Torta de frutas vermelhas</Text>
          <Text style={style.produtPrice}>R$ 200,00</Text>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={style.produtName}>Entrega</Text>
          <Text style={style.produtPrice}>R$ 0,00</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={style.produtName}>Descontos</Text>
          <Text style={{ ...style.produtPrice, color: '#EF321F' }}>R$ 25,00</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DBDBDB', marginTop: 20 }} />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ ...style.sectionTitle, fontSize: 15, marginHorizontal: 0 }}>Total</Text>
          <Text style={{ ...style.sectionTitle, fontSize: 15, marginHorizontal: 0 }}>R$ 175,00</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DBDBDB', marginTop: 0 }} />

        {
          paymentsOptions.map(paymentOption => (
            <View style={style.optionBox} key={paymentOption.id}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Image source={paymentOption.image}/>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={style.optionText}>{paymentOption.name}</Text>
                  </View>
                </View>

                <Feather name='chevron-right' size={24} color="#323232" style={{ marginTop: 5 }} />
              </View>
            </View >
          ))
        }





      </View>
    </ScrollView >
  );
}

export default Payment;
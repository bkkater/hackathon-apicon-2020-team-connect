import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles'
import CompanyHeader from '../../components/CompanyHeader';

function Chat() {
  const [value, onChangeText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <CompanyHeader user='Chat' goBackButton={true} />

      <View style={style.content}>

        <Text style={style.date}>20 de Agosto de 2020</Text>

        <View style={style.boxMessage}>
          <Text>Você:</Text>
          <Text style={style.messageText}>Olá, boa tarde. Me interessei pelo bolo de cenoura, como posso pagar e realizar a retirada?</Text>
          <Text style={style.messageDescription}>Entrando em contato pelo anúncio <Text style={style.messageLink}>Bolo de Cenoura</Text></Text>

          <Text style={style.time}>15:47</Text>

        </View>

        <View style={style.hr}></View>

        <View style={style.boxMessage}>
          <Text style={style.messageText}>Boa tarde. Que bom que se interessou por nossos produtos</Text>
          <Text style={style.messageText}>Você vai gostar bastante!</Text>
          <Text style={style.lastMessageText}>Me diga onde você mora aproximadamente, pode ser bom você vir aqui e provar talvez</Text>

          <Text style={style.time}>16:04</Text>

        </View>

        <View style={style.hr}></View>
      </View>
      <View style={style.boxMessage}>
        <Text>Você:</Text>
        <Text style={style.messageText}>Eu adodoraria então</Text>
        <Text style={style.lastMessageText}>Vamos Combinar sim!</Text>

        <Text style={style.time}>16:10</Text>
      </View>

      <View style={style.input}>
        <TextInput
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Digite uma mensagem'
        />
        <Feather name="send" size={24} color="black" />
      </View>

    </View>
  )
}

export default Chat;
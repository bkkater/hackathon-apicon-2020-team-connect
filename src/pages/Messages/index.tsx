import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import style from './styles'
import Message from '../../components/Message';
import CompanyHeader from '../../components/CompanyHeader';

function Messages() {

  return (
    <ScrollView>
      <CompanyHeader user='Mensagens' goBackButton={true} />
      <View style={style.alert}>
        <Text style={style.alertText}>Você tem novas mensagens!</Text>
      </View>

      <Message
        name='Maria Cecília - Bolo de cenoura'
        messageContent='Olá, boa tarde. Me interessei pelo bolo de cenoura, como posso pagar e realizar a retirada?'
        isNew={true}
      />

      <Message
        name='Renata Silva - Torta Prestígio'
        messageContent='Olá, bom dia. Poderia me confirmar o endereço de entrega?'
        isNew={true}
      />

      <Message
        name='João Carlos - Kit festa'
        messageContent='Quais outros sabores você tem disponível?'
        isNew={false}
      />

      <Message
        name='Eduardo Dias - Trufa de limão'
        messageContent='Quais outros sabores você tem disponível?'
        isNew={false}
      />

      <Message
        name='Roberta - Bolo de Chocolate'
        messageContent='Boa tarde. Adorei o bolo, nota 10!'
        isNew={false}
      />

      <Message
        name='José - Bolo de Pote'
        messageContent='Avisa o entregador pra não buzinar, por favor'
        isNew={false}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ ...style.alertText, color: '#A0A0A0', backgroundColor: 'transparent', alignSelf: 'center' }}>Essas são todas as mensagens</Text>
      </View>

    </ScrollView>


  )
}

export default Messages;
import React, { useState } from 'react';
import { View, Image, Text, Switch } from 'react-native';
import { BorderlessButton, TextInput, ScrollView, RectButton } from 'react-native-gesture-handler';
import CompanyHeader from '../../components/CompanyHeader';
import ImagePickerComponent from '../../components/ImagePicker';

import style from './styles'


const Post = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState('“Compre através do aplicativo Elo e receba 15 % de desconto.link.perfil / Elo  @nossoaplicativo #Elo #Cashback #Nossoaplicativo”');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <CompanyHeader goBackButton={true} user='Nova Postagem' />
      <ScrollView>

        <View style={{ marginTop: 30 }}>
          <ImagePickerComponent />
        </View>

        <View style={style.fieldGroup}>
          <TextInput
            style={style.productName}
            placeholder='Nome do produto'
          />
          <TextInput
            style={style.productPrice}
            placeholder='Preço'
          />
        </View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Descrição</Text>

          <TextInput
            style={style.productDescription}
            placeholder='Descrição'
            onChangeText={(text) => setValue(text)}
            value={value}
            multiline={true}
          />
        </View>

        <View style={style.hr}></View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Publicar também em:</Text>

          <View style={style.option}>
            <View style={style.optionDescription}>
              <Text style={style.optionDescriptionText}>Facebook</Text>
            </View>
            <Switch
              trackColor={{ false: "#CECECE", true: "#000" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={!isEnabled}
            />
          </View>

          <View style={style.option}>
            <View style={style.optionDescription}>
              <Text style={style.optionDescriptionText}>Instagram</Text>
            </View>
            <Switch
              trackColor={{ false: "#CECECE", true: "#000" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

        </View>

        <RectButton style={style.button}>
          <Text style={style.buttonText}>Publicar</Text>
        </RectButton>
      </ScrollView>

    </View>
  )
}

export default Post;
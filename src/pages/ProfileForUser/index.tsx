import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import ProfileImages from '../../components/ProfileImages';
import ProfileInformation from '../../components/ProfileInformation';
import CompanyHeader from '../../components/CompanyHeader';

function ProfileForUser() {
  const {navigate} = useNavigation();

  const handleNavigateToProductDetails = () => {
    navigate('ProductDetails')
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='dark' />
      <CompanyHeader user='@malubolos' goBackButton={true}/>

      <ScrollView>
        <View>
          <ProfileInformation user={true}/>

          <ProfileImages onPress={handleNavigateToProductDetails}/>

        </View>

      </ScrollView>
    </View>

  )
}

export default ProfileForUser;
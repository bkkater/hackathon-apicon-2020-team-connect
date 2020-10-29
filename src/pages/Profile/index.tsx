import React from 'react';
import { View, Image, Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import ProfileImages from '../../components/ProfileImages';
import ProfileInformation from '../../components/ProfileInformation';
import CompanyHeader from '../../components/CompanyHeader';

function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='dark' />
      <CompanyHeader user='@malubolos' goBackButton={false}/>

      <ScrollView>
        <View>
          <ProfileInformation user={false}/>

          <ProfileImages />

        </View>

      </ScrollView>
    </View>

  )
}

export default Profile;
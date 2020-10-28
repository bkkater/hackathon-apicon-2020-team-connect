import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeHeader from '../../components/HomeHeader';
import TypeCard from '../../components/TypeCard';

import style from './styles';

function Home() {
    return (
        <View>
            <StatusBar style='dark' />
            <ScrollView style={{ padding: 20 }}>
                <HomeHeader qr={true} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TypeCard
                        label='Bolos'
                        image_uri={`https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`}
                    />
                    <TypeCard
                        label='Tatuagem'
                        image_uri={`https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`}
                    />
                    <TypeCard
                        label='Papelaria'
                        image_uri={`https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`}
                    />
                </ScrollView>

                <Text style={style.sectionTitle}>Negócios destaque</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{borderRadius: 50, borderWidth: 3, height: 20, width: 20, borderStyle: 'dashed', borderBottomColor:'yellow', borderTopColor:'red', borderLeftColor: 'green'}}/>
                </ScrollView>


            </ScrollView>

        </View>
    );
}

export default Home;
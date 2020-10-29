import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import CompanyHighlightCard from '../../components/CompanyHighlightCard';
import HomeHeader from '../../components/HomeHeader';
import ProfileCard from '../../components/ProfileCard';
import SearchField from '../../components/SearchField';
import TypeCard from '../../components/TypeCard';

import style from './styles';

import image01 from '../../../assets/destaque/1.png'
import image02 from '../../../assets/destaque/2.png'
import image03 from '../../../assets/destaque/3.png'
import image04 from '../../../assets/destaque/4.png'
import image05 from '../../../assets/destaque/5.png'
import { profiles } from '../../utils/profiles';
import { Constants } from 'expo';
import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location';
import hereAPI from '../../services/hereAPI';
import { hereKey } from '../../keys/hereKey';

const storiesCompany = [
    {
        id: '01',
        image: image01,
        user: '@malubolos'
    },
    {
        id: '012',
        image: image02,
        user: '@plantasaq'
    },
    {
        id: '03',
        image: image03,
        user: '@marebanho'
    },
    {
        id: '04',
        image: image04,
        user: '@ceumakes'
    },
    {
        id: '05',
        image: image05,
        user: '@123doces'
    }
]

interface CoordsProps {
    latitude: number,
    longitude: number
}

interface LocationProps {
    itens: [
        {
            address: {
                countryCode: string,
                countryName: string,
                stateCode: string,
                state: string,
                city: string,
            }
        }
    ]
}

function Home() {
    const { navigate } = useNavigation();
    const [coords, setCoords] = useState<CoordsProps>();
    const [location, setLocation] = useState<LocationProps>();
    const [errorMsg, setErrorMsg] = useState<any>();

    const handleNavigateToProfileForUser = () => {
        navigate('ProfileForUser')
    }

    useEffect(() => {
        (async () => {
            let { status } = await requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await getCurrentPositionAsync({});
            setCoords(location.coords);
        })();

        async function getReverseGeocode() {
            const response = await hereAPI.get(`/revgeocode?at=${coords?.latitude},${coords?.longitude}&lang=pt-BR&apikey=${hereKey}`);

            setLocation(response.data);
        }
    });

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

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
                    {
                        storiesCompany.map(storieCompany => (
                            <CompanyHighlightCard
                                key={storieCompany.id}
                                image={storieCompany}
                                onPress={handleNavigateToProfileForUser}
                            />
                        ))
                    }
                </ScrollView>

                <Text style={style.sectionTitle}>Negócios próximos</Text>

                <SearchField placeholder='Busque por @ ou nome do negócio' user={true} />
                {
                    profiles.map(profile => (
                        <ProfileCard
                            key={profile.id}
                            companyProfile={profile}
                        />
                    ))
                }
            </ScrollView>

        </View>
    );
}

export default Home;
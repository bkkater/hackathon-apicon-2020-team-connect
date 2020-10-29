import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import HomeHeader from '../../components/HomeHeader';
import SearchField from '../../components/SearchField';
import { productsHistory } from '../../utils/productsHistory';



import style from './styles';

const History: React.FC = () => {
    return (
        <ScrollView style={{ padding: 20 }}>
            <HomeHeader qr={false} />

            <Text style={style.sectionTitle}>Histórico de Compras</Text>

            <SearchField placeholder='Busque pelo produto ou nome do negócio' user={false} />

            {
                productsHistory.map((productsHistory) => (
                    <HistoryCard orderCompany={productsHistory} key={productsHistory.id}/>
                ))
            }

            <View style={{height: 80}}/>

        </ScrollView>

    );
}

export default History;
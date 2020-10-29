import React from 'react';
import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import style from './styles';

interface HistoryCardProps {
    orderCompany: {
        image_uri: string,
        name: string,
        user: string,
        price: number,
        quantity: number,
        product: string,
        date: string,
    }
}

const HistoryCard: React.FC<HistoryCardProps> = ({ orderCompany }) => {
    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={{ flexDirection: 'row', alignItems: 'center', maxWidth: 250 }}>
                    <Image
                        source={{ uri: orderCompany.image_uri }}
                        style={{ width: 60, height: 60, alignSelf: 'flex-start' }}
                        borderRadius={50}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={style.companyName}>{orderCompany.name}</Text>
                        <Text style={style.companyUser}>{orderCompany.user}</Text>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#d9d9d9',
                            width: "265%",
                            paddingBottom: 15
                        }} />

                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Text style={style.amount}>1</Text>
                            <Text style={{ ...style.companyUser, marginLeft: 15, color: '#333' }}>{orderCompany.product}</Text>
                        </View>

                        <Text style={{ ...style.companyUser, color: '#333', marginTop: 10 }}>{`Total: R$${orderCompany.price},00`}</Text>
                    </View>
                </View>
                <Text style={{ ...style.companyUser, color: '#333', alignSelf: 'flex-start', marginTop: 5 }}>{orderCompany.date}</Text>
            </View>

            <View style={style.footer}>
                <Feather name="check-circle" size={20} color="#469F30" />
                <Text style={{ ...style.companyUser, color: '#FFF', marginLeft: 10, marginBottom: 2 }}>Concluído</Text>
            </View>
        </View>
    );
}

export default HistoryCard;
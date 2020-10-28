import React from 'react';
import { View, Text, Image } from 'react-native';

// import { Container } from './styles';

interface CompanyHighlightCardProps {
    image: {
        user: string;
        image: any;
        id: string
    },
}

const CompanyHighlightCard: React.FC<CompanyHighlightCardProps> = ({ image }) => {
    return (
        <View style={{alignItems: 'center', marginRight: 20 }}>
            <Image source={image.image} style={{width: 70, height: 70}}/>
            <Text style={{fontFamily: 'Ubuntu_500Medium', fontSize: 13, marginTop: 5}}>{image.user}</Text>
        </View>
    );
}

export default CompanyHighlightCard;
import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// import { Container } from './styles';

interface CompanyHighlightCardProps {
    image: {
        user: string;
        image: any;
        id: string;
    },
    onPress?(): void;
}

const CompanyHighlightCard: React.FC<CompanyHighlightCardProps> = ({ image, onPress }) => {
    return (
        <RectButton style={{alignItems: 'center', marginRight: 20 }} onPress={onPress}>
            <Image source={image.image} style={{width: 70, height: 70}}/>
            <Text style={{fontFamily: 'Ubuntu_500Medium', fontSize: 13, marginTop: 5}}>{image.user}</Text>
        </RectButton>
    );
}

export default CompanyHighlightCard;
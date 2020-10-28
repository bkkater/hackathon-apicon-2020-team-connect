import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 

import Messages from '../pages/Messages';

import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import UserConfig from '../pages/UserConfig';
import Home from '../pages/Home';



const Tab = createBottomTabNavigator();

export default function UserMenuTabs() {
    const { navigate } = useNavigation();
    
    function handleNavigateToPost(){
        navigate('Post')
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 75,
                    backgroundColor: 'orange'
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontFamily: 'Ubuntu_700Bold',
                    fontSize: 11,
                    marginBottom: 10                
                },
                inactiveBackgroundColor: '#1D1D1D',
                activeBackgroundColor: '#141414',
                inactiveTintColor: '#87838E',
                activeTintColor: '#F2F2F2',
                
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="home" size={24} color={focused ? '#F2F2F2' : '#87838E'} />
                        );
                    }
                }} />
            <Tab.Screen
                name="Compras"
                component={Messages}
                options={{
                    tabBarLabel: 'Compras',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="shopping-cart" size={24} color={focused ? '#F2F2F2' : '#87838E'} />
                        );
                    }
                }} />
            <Tab.Screen
                name="Ajustes"
                component={UserConfig}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="sliders" size={24} color={focused ? '#F2F2F2' : '#87838E'} />
                        );
                    }
                }} />

        </Tab.Navigator>
    );
}
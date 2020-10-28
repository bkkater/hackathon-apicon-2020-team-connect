import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 

import Post from '../pages/Post';
import Profile from '../pages/Profile';

import { useNavigation } from '@react-navigation/native';
import CompanyConfig from '../pages/CompanyConfig';

const Tab = createBottomTabNavigator();

export default function CompanyMenuTabs() {
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
                name="Perfil"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="user" size={24} color={focused ? '#F2F2F2' : '#87838E'} />
                        );
                    }
                }} />
            <Tab.Screen
                name="Postar"
                component={Post}
                options={{
                    tabBarLabel: 'Postar',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="plus-square" size={24} color={focused ? '#F2F2F2' : '#87838E'} />
                        );
                    }
                }} />
            <Tab.Screen
                name="Ajustes"
                component={CompanyConfig}
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
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../pages/Chat';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from '../pages/AppLoading';
import LandingPage from '../pages/LandingPage';
import CreateAccount from '../pages/CreateAccount';
import CompanyLogin from '../pages/CompanyLogin';
import UserLogin from '../pages/UserLogin';
import CompanyMenuTabs from './CompanyMenuTabs';
import UserMenuTabs from './UserMenuTabs';
import CompanyConfig from '../pages/CompanyConfig';


const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='LandingPage' component={LandingPage}></Screen>   
                <Screen name='CompanyLogin' component={CompanyLogin}></Screen>   
                <Screen name='UserLogin' component={UserLogin}></Screen>   


                <Screen name='CreateAccount' component={CreateAccount}></Screen>  

                <Screen name='CompanyMenuTabs' component={CompanyMenuTabs} />
                <Screen name='UserMenuTabs' component={UserMenuTabs} />

                <Screen name='CompanyConfig' component={CompanyConfig} />

                <Screen name='Chat' component={Chat} />
                <Screen name='AppLoading' component={AppLoading} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;
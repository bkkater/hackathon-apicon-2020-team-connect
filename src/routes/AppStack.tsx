import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../pages/Chat';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from '../pages/AppLoading';
import LandingPage from '../pages/LandingPage';
import CompanyLogin from '../pages/CompanyLogin';
import UserLogin from '../pages/UserLogin';
import CompanyMenuTabs from './CompanyMenuTabs';
import UserMenuTabs from './UserMenuTabs';
import CompanyConfig from '../pages/CompanyConfig';
import UserConfig from '../pages/UserConfig';
import Home from '../pages/Home';
import History from '../pages/History';
import Messages from '../pages/Messages';
import ProfileForUser from '../pages/ProfileForUser';
import ProductDetails from '../pages/ProductDetails';
import Payment from '../pages/Payment';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='LandingPage' component={LandingPage}></Screen>   
                <Screen name='CompanyLogin' component={CompanyLogin}></Screen>   
                <Screen name='UserLogin' component={UserLogin}></Screen>   

                <Screen name='Home' component={Home}></Screen>   

                <Screen name='History' component={History}></Screen>  

                <Screen name='CompanyMenuTabs' component={CompanyMenuTabs} />
                <Screen name='UserMenuTabs' component={UserMenuTabs} />

                <Screen name='CompanyConfig' component={CompanyConfig} />
                <Screen name='UserConfig' component={UserConfig} />

                <Screen name='Chat' component={Chat} />
                <Screen name='Messages' component={Messages} />
                
                <Screen name='ProfileForUser' component={ProfileForUser} />
                
                <Screen name='ProductDetails' component={ProductDetails} />
                <Screen name='Payment' component={Payment} />

                <Screen name='AppLoading' component={AppLoading} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;
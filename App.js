import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import Home from './Screen/Home';
import Listproduct from './Screen/Listproduct';
import ProductDetail from './Screen/ProductDetail';
import Search from './Screen/Search';
import Pay from './Screen/Pay';
import ConfirmPay from './Screen/ConfirmPay';
import DonePay from './Screen/DonePay';
import Favorites from './Screen/Favorites';
import Inbox from './Screen/Inbox';
import Account from './Screen/Account';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Listproduct" component={Listproduct} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Pay" component={Pay} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmPay" component={ConfirmPay} options={{ headerShown: false }} />
        <Stack.Screen name="DonePay" component={DonePay} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


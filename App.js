import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import Home from './Screen/Home';
import Listproduct from './Screen/Listproduct';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Listproduct" component={Listproduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   // <Listproduct/>
  );
}


//options={{ headerShown: false }}
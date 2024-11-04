
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import {NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
      
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
    	<Stack.Screen name="Screen2" component={Screen2}  options={{ headerShown: false }}/>
        <Stack.Screen name="Screen3" component={Screen3}  options={{ headerShown: false }}/>
        <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



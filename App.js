
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './src/screens/FirstScreen'
import AppIntro from './src/screens/AppIntro'
import Home from './src/screens/Home'
import Details from './src/screens/Details'
import CoWebView from './src/screens/CoWebView'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="AppIntro" component={AppIntro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="CoWebView" component={CoWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
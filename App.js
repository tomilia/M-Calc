import { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './component/Login';
import { CalendarHome } from './component/CalendarHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './other';

export default function App() {
  
  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={CalendarHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: '#333',
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

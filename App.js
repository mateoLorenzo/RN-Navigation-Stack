import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Stack from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </>
  );
}
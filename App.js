import { View, Text } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import BookshelfScreen from './src/screens/BookListScreen'
import SignUpScreen from './src/screens/SignUpScreen';
import Header from './demo';

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <SignUpScreen />
    </View>
  );
}

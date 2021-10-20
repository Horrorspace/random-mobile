import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Nav} from './src/components/Nav'
import {Random} from './src/components/Random'


export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Random />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46211A',
    alignItems: 'center'
  },
});

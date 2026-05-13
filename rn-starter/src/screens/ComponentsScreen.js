import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Randi';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.subheaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subheaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
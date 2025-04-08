import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchScreen from './SearchScreen';

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <SearchScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'white',
    minWidth: '100vw',
    minHeight: '100vh',
    zIndex: -1,
  }
});

export default HomeScreen;
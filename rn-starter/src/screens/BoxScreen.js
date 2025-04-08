import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.viewOneStyle}>Child #1</Text>
      <Text style={styles.viewTwoStyle}>Child #2</Text>
      <Text style={styles.viewThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'purple',
  }
});

export default BoxScreen;
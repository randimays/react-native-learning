import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { styles } from '../styles';

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.header}>Track List Screen</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
      <Button title="Go to Track Create" onPress={() => navigation.navigate('TrackCreate')} />
    </View>
  );
};

export default TrackListScreen;
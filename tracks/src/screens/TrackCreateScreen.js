import React from 'react';
import { View, Text } from 'react-native';
import { requestForegroundPermissionsAsync } from 'expo-location';
import Map from '../components/Map';
import { styles } from '../styles';

const TrackCreateScreen = () => {
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Track</Text>
      <Map />
    </View>
  );
};

export default TrackCreateScreen;
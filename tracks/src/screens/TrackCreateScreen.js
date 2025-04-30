import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { styles } from '../styles';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = ({ navigation }) => {
  const { addLocation } = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Track</Text>
      <Map />
      {err && <Text>Please enable location services.</Text>}
      <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
      <Button title="Go to Account" onPress={() => navigation.navigate('Account')} />
    </View>
  );
};

export default TrackCreateScreen;
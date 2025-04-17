import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { styles } from '../styles';

const TrackCreateScreen = ({ navigation }) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      
      // await watchPositionAsync({
      //   accuracy: Accuracy.BestForNavigation,
      //   timeInterval: 1000,
      //   distanceInterval: 10,
      // }, location => {
      //   console.log(location);
      // });

      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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
import React from 'react';
import { Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { styles } from '../styles';

const Map = () => {
  let points = [];
  const START_LAT = 37.33233;
  const START_LONG = -122.03121;

  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: START_LAT + (i * 0.001),
        longitude: START_LONG + (i * 0.001),
      });
    } else {
      points.push({
        latitude: START_LAT + (i * 0.002),
        longitude: START_LONG + (i * 0.001),
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: START_LAT,
        longitude: START_LONG,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

export default Map;
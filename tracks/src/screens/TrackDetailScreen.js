import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const TrackDetailScreen = () => {
  return (
    <View>
      <Text style={styles.header}>Track Detail Screen</Text>
      <Button title="Go to Account" onPress={() => navigation.navigate('Account')} />
      <Button title="Go to Track Create" onPress={() => navigation.navigate('TrackCreate')} />
    </View>
  );
};

export default TrackDetailScreen;
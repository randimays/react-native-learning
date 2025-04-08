import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'expo-image';
import useResult from '../hooks/useResult';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const {
    error,
    result,
    loading,
    getBusiness
  } = useResult();

  if (!result) {
    return null;
  }


  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        keyExtractor={photo => photo}
        data={result.photos}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 10,
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;

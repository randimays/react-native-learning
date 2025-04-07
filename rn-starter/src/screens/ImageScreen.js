import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const images = [
  {
    title: 'Forest',
    imageSource: require('../../assets/forest.jpg'),
    score: 10
  },
  {
    title: 'Beach',
    imageSource: require('../../assets/beach.jpg'),
    score: 7
  },
  {
    title: 'Mountain',
    imageSource: require('../../assets/mountain.jpg'),
    score: 8
  }
]

const ImageScreen = () => {
  return (
    <View>
      {images.map(image => <ImageDetail key={image.title} {...image} />)}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

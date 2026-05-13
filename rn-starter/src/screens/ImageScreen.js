import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageScore="10"
        imageSource={require('../../assets/forest.jpg')}
        title="Forest" />
      <ImageDetail
        imageScore="8"
        imageSource={require('../../assets/beach.jpg')}
        title="Beach" />
      <ImageDetail
        imageScore="12"
        imageSource={require('../../assets/mountain.jpg')}
        title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
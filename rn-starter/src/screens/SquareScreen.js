import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  
  return (
    <View>
      <ColorCounter color="red" />
      <ColorCounter color="green" />
      <ColorCounter color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
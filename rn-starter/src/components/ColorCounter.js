import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ colors, color, setColors }) => {
  const MAX = 255;
  const MIN = 0;
  const CURRENT_COLOR = colors[color];
  const INCREMENT = 10;

  const increaseColor = () => {
    setColors({
      ...colors,
      [color]: CURRENT_COLOR + INCREMENT <= MAX ? CURRENT_COLOR + INCREMENT : MAX
    });
  };

  const decreaseColor = () => {
    setColors({
      ...colors,
      [color]: CURRENT_COLOR - INCREMENT >= MIN ? CURRENT_COLOR - INCREMENT : MIN
    });
  }
  
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={increaseColor}
        title={`Increase ${color}`}
      />
      <Button
        onPress={decreaseColor}
        title={`Decrease ${color}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
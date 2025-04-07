import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ colors, color, setColors }) => {
  const MAX = 255;
  const MIN = 0;
  const CURRENT_COLOR = colors[color];

  const increaseColor = () => {
    setColors({
      ...colors,
      [color]: CURRENT_COLOR + 10 <= MAX ? CURRENT_COLOR + 10 : MAX
    });
  };

  const decreaseColor = () => {
    setColors({
      ...colors,
      [color]: CURRENT_COLOR - 10 >= MIN ? CURRENT_COLOR - 10 : MIN
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
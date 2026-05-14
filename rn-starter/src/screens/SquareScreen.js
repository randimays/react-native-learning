import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const randomColor = Math.floor(Math.random() * 256);
  const [red, setRed] = useState(randomColor);
  const [green, setGreen] = useState(randomColor);
  const [blue, setBlue] = useState(randomColor);
  const COLOR_INCREMENT = 5;
  const COLOR_MAX_VALUE = 255;
  const COLOR_MIN_VALUE = 0;

  const onIncrease = (color, setter) => {
    let newColorValue = color + COLOR_INCREMENT;

    if (newColorValue >= COLOR_MAX_VALUE) {
      newColorValue = COLOR_MAX_VALUE;
    }

    setter(newColorValue);
  };

  const onDecrease = (color, setter) => {
    let newColorValue = color - COLOR_INCREMENT;

    if (newColorValue <= COLOR_MIN_VALUE) {
      newColorValue = COLOR_MIN_VALUE;
    }

    setter(newColorValue);
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => onIncrease(red, setRed)}
        onDecrease={() => onDecrease(red, setRed)}
        color="red"
      />
      <ColorCounter
        onIncrease={() => onIncrease(green, setGreen)}
        onDecrease={() => onDecrease(green, setGreen)}
        color="green"
      />
      <ColorCounter
        onIncrease={() => onIncrease(blue, setBlue)}
        onDecrease={() => onDecrease(blue, setBlue)}
        color="blue"
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

export default SquareScreen;
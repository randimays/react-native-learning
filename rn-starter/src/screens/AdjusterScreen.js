import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const reducer = (state, action) => {
  const MAX = 255;
  const MIN = 0;

  const handleOutOfBounds = color => {
    const proposedNewValue = state[color] + action.amount;

    if (proposedNewValue > MAX || proposedNewValue < MIN) {
      return state;
    }

    return {
      ...state,
      [color]: state[color] + action.amount
    }
  }

  switch (action.colorToChange) {
    case 'red':
      return handleOutOfBounds('red');
    case 'green':
      return handleOutOfBounds('green');
    case 'blue':
      return handleOutOfBounds('blue');
    default:
      return state;
  }
};

const AdjusterScreen = () => {
  const INCREMENT = 10;

  const INITIAL_STATE = {
    red: 0,
    green: 0,
    blue: 0
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { red, green, blue } = state;

  console.log('state here: ', state)

  const increase = color => dispatch({ colorToChange: color, amount: INCREMENT });
  const decrease = color => dispatch({ colorToChange: color, amount: -1 * INCREMENT });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => increase('red')}
        onDecrease={() => decrease('red')}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => increase('green')}
        onDecrease={() => decrease('green')}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => increase('blue')}
        onDecrease={() => decrease('blue')}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
      <Text>Red: {red}, Green: {green}, Blue: {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdjusterScreen;
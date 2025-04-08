import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const CHANGE_RED = 'CHANGE_RED';
const CHANGE_GREEN = 'CHANGE_GREEN';
const CHANGE_BLUE = 'CHANGE_BLUE';

const reducer = (state, action) => {
  const MAX = 255;
  const MIN = 0;

  const handleOutOfBounds = color => {
    const proposedNewValue = state[color] + action.payload;

    if (proposedNewValue > MAX || proposedNewValue < MIN) {
      return state;
    }

    return {
      ...state,
      [color]: state[color] + action.payload
    }
  }

  switch (action.type) {
    case CHANGE_RED:
      return handleOutOfBounds('red');
    case CHANGE_GREEN:
      return handleOutOfBounds('green');
    case CHANGE_BLUE:
      return handleOutOfBounds('blue');
    default:
      return state;
  }
};

const AdjusterScreen = () => {
  const INCREMENT = 15;

  const INITIAL_STATE = {
    red: 0,
    green: 0,
    blue: 0
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { red, green, blue } = state;

  const increase = type => dispatch({ type, payload: INCREMENT });
  const decrease = type => dispatch({ type, payload: -1 * INCREMENT });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => increase(CHANGE_RED)}
        onDecrease={() => decrease(CHANGE_RED)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => increase(CHANGE_GREEN)}
        onDecrease={() => decrease(CHANGE_GREEN)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => increase(CHANGE_BLUE)}
        onDecrease={() => decrease(CHANGE_BLUE)}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
      <Text>Red: {red}, Green: {green}, Blue: {blue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdjusterScreen;
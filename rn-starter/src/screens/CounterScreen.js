import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const INITIAL_STATE = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <View>
      <Button
        onPress={() => dispatch({ type: INCREMENT })}
        title="Increase"
      />
      <Button
        onPress={() => dispatch({ type: DECREMENT })}
        title="Decrease"
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
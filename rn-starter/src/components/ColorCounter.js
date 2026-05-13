import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Button
        title={`Increase ${color}`}
        onPress={() => { 
          setColors([...colors, randomRgb()])
        }} 
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => { 
          setColors([...colors, randomRgb()])
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorCounter;
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const AdjusterScreen = () => {
  const [colors, setColors] = useState({
    Red: Math.floor(Math.random() * 256),
    Green: Math.floor(Math.random() * 256),
    Blue: Math.floor(Math.random() * 256)
  });

  return (
    <View>
      <FlatList
        keyExtractor={color => color}
        data={Object.keys(colors)}
        renderItem={({ item }) => {
          return <ColorCounter colors={colors} color={item} setColors={setColors} />
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${colors.Red}, ${colors.Green}, ${colors.Blue})`}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdjusterScreen;
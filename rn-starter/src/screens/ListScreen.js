import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 35 },
    { name: 'Friend #2', age: 16 },
    { name: 'Friend #3', age: 60 },
    { name: 'Friend #4', age: 46 },
    { name: 'Friend #5', age: 30 },
    { name: 'Friend #6', age: 28 },
    { name: 'Friend #7', age: 21 },
    { name: 'Friend #8', age: 39 },
  ]
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>{item.name}, age {item.age}</Text>
          </View>
        )
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
});

export default ListScreen;
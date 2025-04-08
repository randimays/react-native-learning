import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({
  onTermChange,
  onTermSubmit,
  term,
}) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        onChangeText={term => onTermChange(term)}
        onEndEditing={onTermSubmit}
        style={styles.searchBar}
        value={term}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#F0EEEE'
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
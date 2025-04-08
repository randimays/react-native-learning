import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  let listView = (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={result => result.id}
      horizontal
      data={results}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
          <ResultDetail result={item} />
        </TouchableOpacity>
      )}
    />
  );

  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      {listView}
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginVertical: 20,
    marginHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 24
  },
  noResultsText: {
    marginHorizontal: 15,
    marginBottom: 30
  }
});

export default withNavigation(ResultsList);
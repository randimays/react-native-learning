import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results }) => {
  let listView = (
    <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id}
        horizontal
        data={results}
        renderItem={({ item }) => <ResultDetail result={item} />}
      />
  );

  if (!results?.length) {
    listView = <Text style={styles.noResultsText}>No results.</Text>
  }

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

export default ResultsList;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Result from './Result';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      {results.length > 0 && results.map((result, index) => <Result key={index} result={result} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginVertical: 30,
    marginHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 24
  }
});

export default ResultsList;
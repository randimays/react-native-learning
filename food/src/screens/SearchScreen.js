import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [
    error,
    results,
    loading,
    searchApi
   ] = useResults();

  const filterResultsByPrice = price => {
    return results?.filter(result => result.price === price) || [];
  };

  return (
    <View style={styles.search}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!error && <Text style={styles.resultsSummary}>We have found {results.length} results.</Text>}
      {error && <Text style={styles.error}>Sorry, something went wrong.</Text>}
      {loading && <Text>Loading...</Text>}
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({
  resultsSummary: {
    marginLeft: 15,
    marginTop: 10,
  },
  error: {
    marginLeft: 15,
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default SearchScreen;
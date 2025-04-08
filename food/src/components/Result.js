import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Result = ({ result }) => {
  console.log('result: ', result.image_url);
    const categories = result?.categories?.length > 0 ? result.categories.map(category => category.title) : null;
  console.log('categories: ', categories);
  return (
    <View style={styles.view}>
      <Text style={styles.resultName}>{result.name || 'Restaurant'}</Text>
      <Text>{result.location.address1}</Text>
      {result.location.address2 && <Text>{result.location.address2}</Text>}
      {result.location.address3 && <Text>{result.location.address3}</Text>}
      <Text>{result.location.city}, {result.location.state} {result.location.zip_code}</Text>
      <View style={styles.categories}>
        {categories && categories.map((category, index) => <Text style={styles.category} key={index}>{category}</Text>)}
      </View>
      {/* <Image source={result.image_url} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
    marginBottom: 15,
  },
  resultName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  category: {
    marginRight: 8,
    backgroundColor: 'cornsilk',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: 'darkgoldenrod',
    borderRadius: 4,
  }
});

export default Result;
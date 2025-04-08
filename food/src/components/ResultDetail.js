import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const ResultDetail = ({ result }) => {
  const categories = result?.categories?.length > 0 ? result.categories.slice(0, 4).map(category => category.title) : null;
  
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: result.image_url || '' }} />
      <Text style={styles.resultName}>{result.name || 'Restaurant'}</Text>
      <Text>{result.location.address1}</Text>
      <View style={styles.categories}>
        {categories && categories.map((category, index) => <Text style={styles.category} key={index}>{category}</Text>)}
      </View>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
    marginBottom: 15,
  },
  image: {
    width: 250,
    height: 170,
    borderRadius: 6,
    marginBottom: 10,
  },
  resultName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  category: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: 'mintcream',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: 'paleturquoise',
    borderRadius: 4,
  }
});

export default ResultDetail;
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        keyExtractor={blogPost => blogPost.title}
        data={state}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" size={30} /> 
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 18
  },
  icon: {
    paddingHorizontal: 10,
    fontSize: 24
  }
});

export default IndexScreen;
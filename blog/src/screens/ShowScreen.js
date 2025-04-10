import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogToShow = state.find(blog => blog.id === navigation.getParam('id'));

  return (
    <View>
      <Text style={styles.title}>{blogToShow.title}</Text>
      <Text style={styles.content}>{blogToShow.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 15,
    marginHorizontal: 10,
    lineHeight: 20
  }
});

export default ShowScreen;
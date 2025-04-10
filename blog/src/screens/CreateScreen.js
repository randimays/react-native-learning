import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.title}>Enter title</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Text style={styles.title}>Enter content</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={text => setContent(text)}
        value={content}
      />
      <Button
        onPress={() => addBlogPost(title, content, () => {
          navigation.navigate('Index')
        })}
        title="Add Blog"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginTop: 15,
    fontSize: 20,
  },
  inputStyle: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
  },
});

export default CreateScreen;
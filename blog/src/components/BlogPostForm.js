import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [content, setContent] = useState(initialValues?.content || '');

  return (
    <View>
      <Text style={styles.title}>Enter title</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <Text style={styles.title}>Enter content</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setContent(text)}
        value={content}
      />
      <Button
        onPress={() => onSubmit(title, content)}
        title="Save Blog Post"
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
  input: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
  },
});

export default BlogPostForm;
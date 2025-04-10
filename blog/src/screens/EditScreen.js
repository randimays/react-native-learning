import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogToShow = state.find(blog => blog.id === navigation.getParam('id'));
  const [title, setTitle] = useState(blogToShow?.title || '');
  const [content, setContent] = useState(blogToShow?.content || '');
  const { editBlogPost } = useContext(Context);
  
  return (
    <View>
      <TextInput
        onChangeText={text => setTitle(text)}
        value={blogToShow.title}
      />
      <TextInput
        onChangeText={text => setContent(text)}
        value={blogToShow.content}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Adjuster')}
        title="Adjuster"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Box"
      />
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Components"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Counter"
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Image"
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="List"
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Text"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

import React from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        style={styles.buttonStyle}
        title="Go To Components Demo"
        onPress={() => 
          navigation.navigate('Components')
        }
      />
      <Button
        style={styles.buttonStyle}
        title="Go To List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go To Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go To Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go To Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go To Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10
  }
});

export default HomeScreen;
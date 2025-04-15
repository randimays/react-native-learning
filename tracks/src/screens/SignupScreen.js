import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>Sign Up for Tracker</Text>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        onChangeText={setPassword}
        secureTextEntry
        value={password}
      />
      <View style={styles.signUpButton}>
        <Button title="Sign Up" />
      </View>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  header: {
    marginTop: 50,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  signUpButton: {
    margin: 10,
  }
});

export default SignupScreen;
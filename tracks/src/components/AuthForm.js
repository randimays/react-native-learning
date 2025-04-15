import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({ errorMessage, headerText, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text h3 style={styles.header}>{headerText}</Text>
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
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <View style={styles.signUpButton}>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </View>
    </>
  );
};

AuthForm.navigationOptions = () => {
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
  error: {
    margin: 10,
    fontSize: 16,
    color: 'red',
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

export default AuthForm;
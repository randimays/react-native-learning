import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from '../styles';

const AuthForm = ({ errorMessage, headerText, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text style={styles.header}>{headerText}</Text>
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

export default AuthForm;
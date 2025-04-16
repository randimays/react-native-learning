import React, { useContext } from 'react';
import { View } from 'react-native';
import AuthForm from '../components/AuthForm';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { styles } from '../styles';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign Up for Tracker"
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
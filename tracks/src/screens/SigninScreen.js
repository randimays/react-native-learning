import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { styles } from '../styles';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign In to Tracker"
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an account yet? Sign up instead."
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createStackNavigator({
  Signin: SigninScreen,
  Signup: SignupScreen,
  TrackDetail: TrackDetailScreen,
  TrackList: TrackListScreen,
  TrackCreate: TrackCreateScreen,
  Account: AccountScreen,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={navigator => { setNavigator(navigator) }} />
    </AuthProvider>
  );
};
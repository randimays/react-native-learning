import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const INITIAL_STATE = {
  token: null,
  errorMessage: '',
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_OUT':
    default:
      return state;
  }
};

const startRecording = dispatch => () => {

};

const stopRecording = dispatch => () => {

};

const addLocation = dispatch => () => {

};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    
    dispatch({ type: 'SIGN_IN', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign up.'})
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    clearErrorMessage,
    signup,
    signin,
    signout,
    tryLocalSignin,
  },
  INITIAL_STATE
);
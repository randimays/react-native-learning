import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const INITIAL_STATE = {
  token: null,
  errorMessage: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {
        ...state,
        errorMessage: action.payload
      }
    case 'SIGN_IN':
      return {
        errorMessage: '',
        token: action.payload
      }
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: ''
      }
    case 'SIGN_OUT':
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'SIGN_IN', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
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

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    
    dispatch({ type: 'SIGN_IN', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign in.' });
  }
};

const signout = dispatch => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'SIGN_OUT' });
    navigate('loginFlow');
  } catch (err) {
    dispatch({ type: 'ADD_ERROR', payload: 'Unable to sign out.' });
  }
}

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
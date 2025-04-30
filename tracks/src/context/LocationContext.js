import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const INITIAL_STATE = {
  currentLocation: null,
  locations: [],
  recording: false,
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        currentLocation: action.payload,
      };
    case 'SIGN_OUT':
    default:
      return state;
  }
};

const startRecording = dispatch => () => {

};

const stopRecording = dispatch => () => {

};

const addLocation = dispatch => location => {
  dispatch({ type: 'ADD_LOCATION', payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  {
    addLocation,
    startRecording,
    stopRecording,
  },
  INITIAL_STATE
);
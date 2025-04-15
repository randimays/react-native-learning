import createDataContext from './createDataContext';

const INITIAL_STATE = {
  isSignedIn: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  INITIAL_STATE
);
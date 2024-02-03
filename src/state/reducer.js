import { SET_USER_LOG_STATUS } from './actions';

export const initialState = {
  userName: 'admin',
  userPassword: '1234',
  isLoggedIn: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOG_STATUS:
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

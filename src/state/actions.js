export const SET_USER_LOG_STATUS = 'SET_USER_LOG_STATUS';

export const setUserLogStatus = (value) => {
  return {
    type: SET_USER_LOG_STATUS,
    payload: value,
  };
};

import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userName: 'admin',
  userEmail: 'admin@test.net',
  userId: 1,
  userPassword: '1234',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUserLogStatus } = userSlice.actions;
export default userSlice.reducer;

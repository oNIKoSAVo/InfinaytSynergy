import { createSlice } from '@reduxjs/toolkit';
import usersData from '../data.json'; 

const usersSlice = createSlice({
  name: 'users',
  initialState: { all: usersData, selected: null },
  reducers: {
    updateUser(state, action) {
      const userToUpdate = action.payload;
      const existingUser = state.all.find((user) => user.id === userToUpdate.id);
      if (existingUser) {
        existingUser.position = userToUpdate.position;
        existingUser.department = userToUpdate.department;
        existingUser.company = userToUpdate.company;
        existingUser.name = userToUpdate.name;
      }
    },
    selectUser(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { updateUser, selectUser } = usersSlice.actions;
export const selectUsers = (state) => state.users.all;
export const selectSelectedUser = (state) => state.users.selected;

export default usersSlice.reducer;
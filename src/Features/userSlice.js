import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    activeUsers: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.activeUsers = action.payload.filter((user) => user.isActive);
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.map((user) =>
        user.id === userId ? { ...user, isActive: false } : user
      );
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== userId
      );
    },
    searchUsers: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.activeUsers = state.users.filter(
        (user) =>
          user.isActive &&
          (user.name.toLowerCase().includes(searchTerm) ||
            user.phone.includes(searchTerm))
      );
    },
    sortUsers: (state, action) => {
      const sortingOrder = action.payload;
      if (sortingOrder === "ascending") {
        state.activeUsers.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortingOrder === "descending") {
        state.activeUsers.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
  },
});

export const { setUsers, deleteUser, searchUsers, sortUsers } =
  userSlice.actions;

export const selectActiveUsers = (state) => state.user.activeUsers;

export default userSlice.reducer;

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { FormLogin } from "@/components/FormLogin";

import { loginUser } from "../services/fetchUsers";

type LoginPayload = FormLogin & {
  users: User[];
};

interface UserState {
  loggedUser: User | null;
  response: {
    status: boolean | null;
    message: "logged" | "Wrong password" | "Email not found" | null;
    errorType: "email" | "password" | null;
  };
}

const initialState: UserState = {
  loggedUser: null,
  response: {
    status: null,
    message: null,
    errorType: null,
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.response.message = null;
      state.response.errorType = null;
    },
    //   register: (state, action: PayloadAction<FormRegister>) => {
    //     const found = state.users.find((user) => user.email === action.payload.email);
    //     if (found) {
    //       state.response.status = false;
    //       state.response.message = 'Email already exists';
    //     } else {
    //       const newUser = {
    //         id: Math.random().toString(),
    //         ...action.payload,
    //         role: 'client',
    //       };
    //       state.users = [...state.users, newUser];
    //       state.loggedUser = newUser;
    //     }
    //   },
    login: (state, action: PayloadAction<LoginPayload>) => {
      const found = action.payload.users.find(
        (user) => user.email === action.payload.email
      );
      if (!found) {
        state.response.errorType = "email";
        state.response.message = "Email not found";
        state.response.status = false;
      } else if (found) {
        if (found.password === action.payload.password) {
          state.loggedUser = found;
          state.response.status = true;
        } else {
          state.response.status = false;
          state.response.errorType = "password";
          state.response.message = "Wrong password";
        }
      }
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.response.status = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.response.status = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.response.status = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset, login, logout } = user.actions;

export default user.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { login } from "../featrues/userSlice";

export const loginUser = createAsyncThunk(
  "user/fetchUsers",
  async (credentials: FormLogin, thunkAPI) => {
    const { data: usersData }: { data: User[] } = await axios.get(
      "http://localhost:3000/api/getUsers"
    );

    const { email, password } = credentials;
    const { dispatch } = thunkAPI;

    dispatch(login({ email, password, users: usersData }));
  }
);

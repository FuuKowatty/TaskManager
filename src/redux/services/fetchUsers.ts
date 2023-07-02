import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get('http://localhost:3000/api/getUsers');
    return response.data;
  }); 
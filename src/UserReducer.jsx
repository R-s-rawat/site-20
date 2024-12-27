import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name:'users',
  // initialState:[],
  initialState: userList,
  reducers:{

  }
})
export default userSlice.reducer; 
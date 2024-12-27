import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name:'users',
  // initialState:[],
  initialState: userList,
  reducers:{
    // after adding FORM ADD USER onSubmit=handleSubmit
    addUser:(state, action)=>{
      console.log(action);
    }
  }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer; 
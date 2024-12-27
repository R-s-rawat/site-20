import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
  name:'users',
  // initialState:[],
  initialState: userList,
  reducers:{
    // after adding FORM ADD USER onSubmit=handleSubmit
    addUser:(state, action)=>{
      // console.log(action);
      state.push(action.payload);
    },
    updateUser:(state,action)=>{
    const {id, name, email} = action.payload;
    const updateUser = state.find(user => user.id == id);
    if(updateUser){
      updateUser.name=name;
      updateUser.email=email;
    }
    },
    deleteUser:(state,action)=>{
      const {id} = action.payload;
    const deleteUser = state.find(user => user.id == id);
    if(deleteUser){
      return state.filter(f => f.id !== id)
    }
    }
  }
})

export const {addUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer; 
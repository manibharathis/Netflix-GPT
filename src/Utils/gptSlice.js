import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name : "gpt",
    initialState :{
      showGPTButton:true
    },
    reducers :{
     toggleGptButton :(state,action)=>{
         state.showGPTButton=!state.showGPTButton
     }
    }
})
export const {toggleGptButton} = gptSlice.actions;
export default gptSlice.reducer
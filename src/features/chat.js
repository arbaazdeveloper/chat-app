import { createSlice } from "@reduxjs/toolkit";
export const chatSlice=createSlice({
    name:"chat",
    initialState:{value:{chat:"mychat"}},
    reducers:{
        Mychats(state,action){
            state.value=action.payload
        }
    }

});
export const {Mychats}=chatSlice.actions
export default chatSlice.reducer
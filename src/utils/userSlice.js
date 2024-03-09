import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState: null,
    reducers: {
        addUser:  (state , action) => { //when user sign in  or up
            return action.payload;
        },
        removeUser: (state,action)=>{ //when user sign out  we will empty the state to make sure no data is shown in profile page after signing out
            return null;
        }
    },
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
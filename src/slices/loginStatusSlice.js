import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false
}

export const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
        
        changeStatusToLoggedIn: (state) => {
            state.status = true;
            console.log(state.status);
        },

        changeStatusToLoggedOut: (state) => {
            state.status = false;
            console.log(state.status);
        }
    }
})

export const {changeStatusToLoggedIn, changeStatusToLoggedOut} = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
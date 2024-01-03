import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const lettuceCounterSlice = createSlice({
    name: "lettuceCounter",
    initialState,
    reducers: {
        
        incrementLettuce: (state) => {
            state.count += 1;
        },

        decrementLettuce: (state) => {
            if (state.count > 0) state.count -= 1;
        },

        resetLettuce: (state) => {
            state.count = 0;
        }
    }
})

export const {incrementLettuce, decrementLettuce, resetLettuce} = lettuceCounterSlice.actions;

export default lettuceCounterSlice.reducer;
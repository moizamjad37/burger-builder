import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const baconCounterSlice = createSlice({
    name: "baconCounter",
    initialState,
    reducers: {
        
        incrementBacon: (state) => {
            state.count += 1;
        },

        decrementBacon: (state) => {
            if (state.count > 0) state.count -= 1;
        },

        resetBacon: (state) => {
            state.count = 0;
        }
    }
})

export const {incrementBacon, decrementBacon, resetBacon} = baconCounterSlice.actions;

export default baconCounterSlice.reducer;
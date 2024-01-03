import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const meatCounterSlice = createSlice({
    name: "meatCounter",
    initialState,
    reducers: {
        
        incrementMeat: (state) => {
            state.count += 1;
        },

        decrementMeat: (state) => {
            if (state.count > 0) state.count -= 1;
        },
        
        resetMeat: (state) => {
            state.count = 0;
        }
    }
})

export const {incrementMeat, decrementMeat, resetMeat} = meatCounterSlice.actions;

export default meatCounterSlice.reducer;
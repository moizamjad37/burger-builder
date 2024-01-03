import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const cheeseCounterSlice = createSlice({
    name: "cheeseCounter",
    initialState,
    reducers: {
        
        incrementCheese: (state) => {
            state.count += 1;
        },

        decrementCheese: (state) => {
            if (state.count > 0) state.count -= 1;
        },

        resetCheese: (state) => {
            state.count = 0;
        }
    }
})

export const {incrementCheese, decrementCheese, resetCheese} = cheeseCounterSlice.actions;

export default cheeseCounterSlice.reducer;
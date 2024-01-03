import { configureStore } from "@reduxjs/toolkit";
import lettuceCounterReducer from "../slices/lettuceCounterSlice";
import cheeseCounterReducer from "../slices/cheeseCounterSlice";
import meatCounterReducer from "../slices/meatCounterSlice";
import baconCounterReducer from "../slices/baconCounterSlice";
import loginStatusReducer from "../slices/loginStatusSlice";
import userEmailReducer from "../slices/userEmailSlice";

export const store = configureStore ({
    reducer: {
        lettuce: lettuceCounterReducer,
        cheese: cheeseCounterReducer,
        meat: meatCounterReducer,
        bacon: baconCounterReducer,
        loginstatus: loginStatusReducer,
        useremail: userEmailReducer,  
    },
})
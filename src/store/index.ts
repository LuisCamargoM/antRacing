import { configureStore } from "@reduxjs/toolkit";
import antsSlice from "./slices/antsSlice";

export const store = configureStore({
    reducer: {
        antsData: antsSlice,
    }
})
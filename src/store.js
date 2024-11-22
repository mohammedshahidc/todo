import { configureStore } from "@reduxjs/toolkit";
import inpslice from './slice'
export const store=configureStore({
    reducer:{
        todo:inpslice
    }
})
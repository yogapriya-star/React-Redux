import {configureStore} from "@reduxjs/toolkit"
import jokeSlice from "./jokeSlice";


const store = configureStore({
    reducer:{
        joke:jokeSlice.reducer
    }
})


const {joke} = jokeSlice.actions
export default store

export {joke}
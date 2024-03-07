import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const initialState ={
    joke:"No joke"
}

const fetchJoke = createAsyncThunk("jokes/jokecategory", async function(category){
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(function(result){
        return result.data.value;
    })
})

const jokeSlice = createSlice({
    name:"joke",
    initialState,
    reducers:{
       
    },
    extraReducers:(build)=>{
        build.addCase(fetchJoke.pending, function(){
            console.log("Loading...")
        }).addCase(fetchJoke.fulfilled,(state, actions)=>{
            state.joke = actions.payload
        })
    }
})


export default jokeSlice

export {fetchJoke}

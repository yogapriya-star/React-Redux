import {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import { fetchJoke } from "./jokeSlice";

function App() {

  const [category, setCategory] = useState()
  const joke = useSelector(function(state){
    return state.joke.joke
  })
  
  const dispatch = useDispatch()

  function handleFetch(){
    dispatch(fetchJoke(category))
  }

  function handleChangeCategory(e){
    setCategory(e.target.value)
  }
 

  return (
    <div className="App">
     <input onChange={handleChangeCategory} />
     <button onClick={handleFetch}>Get Jokes</button>
     <h1>{joke}</h1>
    </div>
  );
}

export default App;

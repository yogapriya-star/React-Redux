import {useSelector, useDispatch} from "react-redux"
import { increment } from "./Store"
import { decrement } from "./Store"

function App() {
  const count = useSelector(function(state){
    return state.counter.count
  }) 

  const dispatch = useDispatch()

  function inFunction(){
   dispatch(increment())
  }

  function decFunction(){
    dispatch(decrement())
  }
  
  return (
    <div className="App">
      <h1>Hello {count}</h1>
      <button onClick={inFunction}>Increment</button>
      <button onClick={decFunction}>Decrement</button>
    </div>
  );
}

export default App;

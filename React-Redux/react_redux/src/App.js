import {useSelector, useDispatch} from "react-redux"
function App() {
  const count = useSelector(function(state){
    return state.counter
  }) 

  const dispatch = useDispatch()

  function inFunction(){
   dispatch({type:"INC"})
  }

  function decFunction(){
    dispatch({type:"DEC"})
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

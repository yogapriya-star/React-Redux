import React, {useState, useEffect} from 'react'
import axios from "axios";

const App = () => {
  const [enteredvalue, setevalue] = useState("");
  const [fruit, setfruit] = useState(["Mango", "PineApple"])

  useEffect(function(){
    axios.get("http://localhost:5000/fruitlist").then(function(data){
      setfruit(data.data)
    })
  },[]) //one time it will be loaded
 

  function handlevalue(evt){
    setevalue(evt.target.value)
  }
  function add(){
    axios.post("http://localhost:5000/addfruit",{newfruit:enteredvalue})
    setfruit([...fruit, {name:enteredvalue}])
    setevalue("")
  }
  return (
    <div>
      <input onChange={handlevalue}></input>
      <button onClick={add}>Add</button>
      {fruit.map(function(item, index){
        return <h1 key={index}>{item.name}</h1>
      })}
    </div>
  )
}

export default App
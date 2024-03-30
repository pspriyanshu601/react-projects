import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(0);
  useEffect(() => {
    alert("Hey welcome to my page")
  }, [])

    useEffect(() => {
      setFirst(count*2)
    }, [count]);
   
  return (
    <>
      <div> The count is {count} and first is {first} </div>
      <button onClick={()=>setCount(count+1)} > increase count</button>
    </>
  );
}

export default App;

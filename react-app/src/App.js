import logo from "./logo.svg"
import { useState } from "react";
import "./App.css"
import Navbar from "./components/navbar.jsx";
 
function App() {
  const [value,setValue]=useState(0);
  return (
    <div className="App">
    Hey Harry {value}
    <button onClick={()=>setValue(value+1)}> Increase count</button>
    <button onClick={()=>setValue(0)}>Reset</button>
    <Navbar></Navbar>
    </div>
  )
}

export default App;

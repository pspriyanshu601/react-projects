import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function Animal({type, name, age}) { 
  return (
    <li><strong>{type}</strong> {name} {age}</li>
  );
}

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(()=>{
    const lastQuery=localStorage.getItem('lastQuery');
    search(lastQuery);

  },[])

  async function search(query) {
    const { data } = await axios.get(`https://react-projects-five-chi.vercel.app/animals?q=${query}`);
    console.log(data);
    setAnimals(data); // Update state with the fetched data
    localStorage.setItem('lastQuery',query);
  }

  return (
    <main>
      <h1>Animal Farm</h1>
      <input type="text" placeholder='Enter name' onChange={(e) => search(e.target.value)} />
      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal}></Animal>
        ))}
        {animals.length === 0 && <li>No animals found</li>}
      </ul>
    </main>
  );
}

export default App;

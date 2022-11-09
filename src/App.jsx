
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import InfoLocation from './components/InfoLocation';
import ResidentInfo from './components/ResidentInfo';


function App() {

  const [location, setLocation] = useState({});
  const [inputA, setInput] = useState("");

  useEffect(() => {
    const indexLocation = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${indexLocation}`)
      .then(res => setLocation(res.data));
  }, []);

  const buttonSearch = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${inputA}`)
      .then(res => setLocation(res.data));

  }

  return (
    <div className="App">
      <img className='header' src="../rick-header.jpg" alt="" />
      <div className="container-all">
        <div className='input'>
          <input type="text" placeholder='Enter the id to search' value={inputA} onChange={e => setInput(e.target.value)} />
          <button onClick={buttonSearch}>Search</button>
        </div>
        <InfoLocation location={location} />

          <div className='card'>
          {location.residents?.map(users => (
            <ResidentInfo key={users} users={users} />
          ))}
        </div>
        
      </div>

    </div>
  )
}

export default App

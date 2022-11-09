import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({ users }) => {

  const [residents, setResidents] = useState({});

  useEffect(() => {
    axios.get(users)
      .then(res => setResidents(res.data))
  }, []);

  console.log(residents);
  return (

    <div className='card-resident'>
      <div className="container-image">
        <img src={residents.image} alt="image resident" />
      </div>
      <div className="container-resident">
        <div className="container-ns">
          <h3>{residents.name}</h3>
          <p>{residents.status}</p>
        </div>
          <h5>SPECIES</h5>
          <p>{residents.species}</p>
        
        <h5>ORIGIN</h5>
        <p>{residents.origin?.name}</p>
        <h5>EPISODE</h5>
        <p>{residents.episode?.length}</p>
      </div>
    </div>
  );
};

export default ResidentInfo;
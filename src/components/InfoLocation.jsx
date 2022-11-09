import React from 'react';

const InfoLocation = ({ location }) => {

  return (
    <div className='card-information'>
      <div className='information'>
      <h2 className='name-resident'>{location.name}</h2>
        <div className="contain-info">
        <div className='info'>
          <h3>Type:</h3>
          <p>{location.type}</p>
        </div>
        <div className='info'>
          <h3>Dimension</h3>
          <p>{location.dimension}</p>
        </div>
        <div className='info'>
          <h3>Population</h3>
          <p>{location.residents?.length}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLocation;
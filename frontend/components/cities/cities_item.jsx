import React from 'react';
import { Link } from 'react-router-dom';

const CitiesItem = ({ city }) => {
  return (
    <div key={city.id} className="city-item-container">
      <Link to={`/cities/${city.id}`}><img className="city-image" src={city.image_url} alt={city.name}/></Link>
    </div>
  )
}

export default CitiesItem;

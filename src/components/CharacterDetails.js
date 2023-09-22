import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CharacterDetails.css';
import { useSelector } from 'react-redux';


const CharacterDetails = () => {;
    const params = useParams();
    const id = params.id || 0;
    const {characters}= useSelector((state) => state.character);
     const character = characters.find(item =>item.id===id)
    console.log(character);
    console.log(params);
    
  
    return (
      <div className="actor-details">
        <div className="hero">
          <img src={''} alt="actor-icon" />
          <h2>fullName</h2>
        </div>
      </div>
    );
  };
  
  export default CharacterDetails;
  
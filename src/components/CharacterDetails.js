import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../redux/characterDetailSlice';
import '../styles/CharacterDetails.css';


const CharacterDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const charactersData = useSelector((state) => state.details);
    const { loading, characterDetails, error } = charactersData;
  
    useEffect(() => {
      dispatch(getCharacter(params.id));
    }, [dispatch, params.id]);
  
    if (loading) {
      return (
        <p> character details are loading!</p>
      );
    }
    if (error) {
      return (
        <p>Something is incorrect!</p>
      );
    }
  
    return (
      <div className="actor-details">
        <div className="hero">
          <img src={characterDetails.imageUrl} alt="actor-icon" />
          <h2>{characterDetails.fullName}</h2>
        </div>
      </div>
    );
  };
  
  export default CharacterDetails;
  
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../redux/characterDetailSlice';
import '../styles/CharacterDetails.css';
import '../styles/spinner.css';


const CharacterDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const charactersData = useSelector((state) => state.details);
    const { loading, characterDetails} = charactersData;
  
    useEffect(() => {
      dispatch(getCharacter(params.id));
    }, [dispatch, params.id]);
  
    if (loading) {
      return (
        <div className="loader" />
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
  
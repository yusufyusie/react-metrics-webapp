import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCharacterDetails } from '../redux/characterDetailSlice';
import '../styles/CharacterDetails.css';


const CharacterDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const charactersData = useSelector((store) => store.details);
    const { loading, characterDetails } = charactersData;
  
    useEffect(() => {
      dispatch(getCharacterDetails(params.id));
    }, [dispatch, params.id]);
  
    if (loading) {
      return (
        <div className="loader" />
      );
    }
  
    return (
      <div className="actor-details">
        <div className="hero">
          <img src={characterDetails.image} alt="actor-icon" />
          <h2>{characterDetails.name}</h2>
        </div>
        <div className="details">
          <h2>
            {characterDetails.name}
            {' '}
            Details:
          </h2>
          <ul>
            <li>
              <span>Name</span>
              <span>{characterDetails.name}</span>
            </li>
            <li>
              <span>Symbol</span>
              <span>{characterDetails.symbol}</span>
            </li>
            <li>
              <span>Rank</span>
              <span>{characterDetails.rank}</span>
            </li>
            <li>
              <span>Price to USD</span>
              <span>
                {' $'}
                {characterDetails.price < 1000
                  ? characterDetails.price.toFixed(2) : (characterDetails.price / 1000).toFixed(1)}
                {characterDetails.price > 1000 ? 'K' : ''}
              </span>
            </li>
            <li>
              <span>Daily Change</span>
              <span>
                {characterDetails.priceChange1d}
                %
              </span>
            </li>
            <li>
              <span>Volume</span>
              <span>
                $
                {(characterDetails.volume / 1000000000).toFixed(1)}
                B
              </span>
            </li>
            <li>
              <span>Market Cap</span>
              <span>
                $
                {(characterDetails.marketCap / 1000000000).toFixed(1)}
                B
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CharacterDetails;
  
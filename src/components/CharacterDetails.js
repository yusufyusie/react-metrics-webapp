import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CharacterDetails.css';
import { useSelector } from 'react-redux';


const CharacterDetails = () => {;
    const params = useParams();
    const id = params.id || 0;
    const {characters}= useSelector((state) => state.character);
     const character = characters.find(item =>item.id==id)
    console.log(character);
    
  
    return (
      <section className="character-container">
  <article className="character-list">
          <div className="actorCard">
            <div className="actorImage">
              {(character.imageUrl)
                  ? <img 
                        width={228}
                        height={343}
                        alt="Actor" src={character.imageUrl} />
                        : <p>no image available</p>}
                      <div className="title">
                          {character.fullName}
                          &apos;s details
                      </div>
            </div>
            <div className="actorDesc">
            <ul className="details-info">
                <li className="details-item">
                  <span className="details-name">First Name</span>
                  <span className="details-response">{character.firstName}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Last Name:</span>
                  <span className="details-response">{character.lastName}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Full Name: </span>
                  <span className="details-response">{character.fullName}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Title:</span>
                  <span className="details-response">{character.title}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Family:</span>
                  <span className="details-response">{character.family}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Image:</span>
                  <span className="details-response">{character.image}</span>
                </li>
                <li className="details-item">
                  <span className="details-name">Image URL:</span>
                  <span className="details-response">{character.imageUrl}</span>
                </li>

              </ul>
            </div>
         </div>
      </article>           
  </section>
    );
  };
  
  export default CharacterDetails;
  
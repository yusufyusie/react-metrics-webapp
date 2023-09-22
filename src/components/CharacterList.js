import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../redux/characterSlice'
import { Link } from 'react-router-dom';
import banner from '../assets/banner.png';
import searchIcon from '../assets/find.svg';
import '../styles/CharacterList.css';
import '../styles/spinner.css';


const CharacterList= () => {
    const { charactersData, loading } = useSelector((store) => store.charactersData);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getAllCharacters());
      }, [dispatch]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };

      const searchedActor = charactersData.filter((actor) => actor.fullName.toLowerCase()
          .match(search.toLowerCase()) || actor.symbol.toLowerCase()
          .match(search.toLowerCase()));

          if (loading) {
            return (
              <div className="loader" />
            );
          }

    return (
    <section className="character-container">
            <img src={banner} alt="banner" />
            <article className="search-field">
                <img src={searchIcon} alt="search icon" />
                <input
                    type="search"
                    placeholder="Search Characters"
                    onChange={handleChange}
                    value={search} 
                    />
            </article>
        <article className="character-list">
          {searchedActor.map((actor) => (
              <Link to={`/details/${actor.id}`} key={actor.id}>
                <div className="actorCard">
                  <div className="actorImage">
                    {(actor.imageUrl)
                        ? <img 
                              width={228}
                              height={343}
                              alt="Actor" src={actor.imageUrl} />
                              : <p>no image available</p>}
                  </div>
                  <div className="actorDesc">
                    <h2>{actor.fullName}</h2>
                    <p>
                    Family:
                      {actor.family}
                    </p>
                  </div>
               </div>
              </Link>
                ))}
            </article>           
        </section>
     );
};

export default CharacterList;
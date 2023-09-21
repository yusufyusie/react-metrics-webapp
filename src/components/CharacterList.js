import { React, useEffect, useState } from 'react';
import banner from '../assets/banner.png';
import searchIcon from '../assets/find.svg';
import style from '../styles/CharacterList.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../redux/characterSlice'
import { Link } from 'react-router-dom';

const CharacterList= () => {
    const { charactersData, loading, error } = useSelector((store) => store.charactersData);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getAllCharacters());
      }, [dispatch]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };

      const filtered = charactersData.filter((actor) => actor.fullName.toLowerCase()
          .match(search.toLowerCase()) || actor.symbol.toLowerCase()
          .match(search.toLowerCase()));

      if (loading) {
        return (
          <p> characters are loading!</p>
        );
      }
      if (error) {
        return (
          <p>Something is incorrect!</p>
        );
      }

    return (
    <><section className="character-container">
            <img src={banner} alt="banner" />
            <article className="search-field">
                <img src={searchIcon} alt="search icon" />
                <input
                    type="search"
                    placeholder="Search Characters"
                    onChange={handleChange}
                    value={search} />
            </article>
        </section>
        <section className="character-list">
          {filtered.map((actor) => (
              <Link to={`/details/${actor.id}`} key={actor.id}>
                <div className="actorCard">
                  <div className="actorImage">
                    {(actor.image)
                        ? <img alt="Actor" src={actor.image} />
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
            </section>
            </>
     );
}

export default CharacterList;
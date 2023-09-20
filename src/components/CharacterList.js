import { React, useEffect, useState } from 'react';
import banner from '../assets/banner.png';
import searchIcon from '../assets/find.svg';
import '../styles/CharacterList.css';
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

      const filtered = charactersData.filter((person) => person.name.toLowerCase().includes(search));
      if (loading) {
        return (
          <p> Missions are loading!</p>
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
        </section><section className="character-list">
                {filtered.map((character) => (
                    <Link to={`/details/${character.id}`} key={character.id}></Link>
                ))}
            </section></>
     );
}

export default CharacterList;
import { React, useEffect, useState } from 'react';
import banner from '../assets/banner.png';
import searchIcon from '../assets/find.svg';
import '../styles/CharacterList.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../redux/characterSlice'

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

        </section>
     );
}

export default CharacterList;
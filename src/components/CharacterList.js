import React, { useState } from 'react';
import banner from '../assets/banner.png';
import searchIcon from '../assets/find.svg';
import '../styles/CharacterList.css';

const CharacterList= () => {
    const [search, setSearch] = useState('');

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
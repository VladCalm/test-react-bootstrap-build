import React from 'react';
import '../../styles/SearchBar.css'

export const SearchBar = () => (
    <div className='search-bar'>
        <input className='search' type='text' name='' value='' placeholder='Поиск по слову'/>
        <label className='filter'>
            <input type='checkbox' name='' value=''/>
            Персональное
        </label>
        <label className='filter'>
            <input type='checkbox' name='' value='' />
            Ночное
        </label>
        <label className='filter'>
            <input type='checkbox' name='' value='' />
            Срочное
        </label>

    </div>
)

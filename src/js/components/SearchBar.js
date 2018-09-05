import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/SearchBar.css'
import { UserBoard } from './UserBoard';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchField: '' };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e){
        this.setState({ searchField: e.target.value });
        this.props.onInputChange(e.target.value.toLowerCase());
    }

    render() {
        return (
            <div className='search-bar'>
                <input className='search' type='text' name='' value={this.state.searchField} placeholder='Поиск по слову' onChange={this.handleSearch} />
                <div className='filter-board'>
                    <label className='filter'>
                        <input type='checkbox' name='personal' value='' />
                        Персональное
                    </label>
                    <label className='filter'>
                        <input type='checkbox' name='night' value='' />
                        Ночное
                    </label>
                    <label className='filter'>
                        <input type='checkbox' name='urgent' value='' />
                        Срочное
                    </label>
                </div>
                <UserBoard/>
            </div>
        );
    }
}

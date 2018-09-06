import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/SearchBar.css'
import { UserBoard } from './UserBoard';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleSearch(e){
        this.setState({ searchField: e.target.value });
        this.props.onInputChange(e.target.value.toLowerCase());
    }

    handleFilter(e) {
        const name = e.target.name;
        const checked = e.target.checked;
        this.props.onChecked(name, checked);
    }

    render() {
        return (
            <div className='search-bar'>
                <input className='search' type='text' name='' value={this.state.searchField} placeholder='Поиск по слову' onChange={this.handleSearch} />
                <div className='filter-board'>
                    <label className='filter'>
                        <input type='checkbox' name='personal' onChange={this.handleFilter} />
                        Персональное
                    </label>
                    <label className='filter'>
                        <input type='checkbox' name='night' onChange={this.handleFilter} />
                        Ночное
                    </label>
                    <label className='filter'>
                        <input type='checkbox' name='urgent' onChange={this.handleFilter} />
                        Срочное
                    </label>
                </div>
                <UserBoard/>
            </div>
        );
    }
}

import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

import '../../styles/SearchBar.css'
import { UserBoard } from './UserBoard';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            isPersonal: false,
            isNight: false,
            isUrgent: false
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

       if (name === 'personal') {
           return this.setState({ isPersonal: !this.state.isPersonal });
       } if (name === 'night') {
            return this.setState({ isNight: !this.state.isNight });
       } if (name === 'urgent') {
           return this.setState({ isUrgent: !this.state.isUrgent });
        }

    }

    render() {
        let classP = classNames('filter', { 'active-filter': this.state.isPersonal });
        let classN = classNames('filter', { 'active-filter': this.state.isNight });
        let classU = classNames('filter', { 'active-filter': this.state.isUrgent });
        return (
            <div className='search-bar'>
                <input className='search' type='text' name='search-task' value={this.state.searchField} placeholder='Поиск по слову' onChange={this.handleSearch} />
                <div className='filter-board'>
                    <label className={classP}>
                        <input type='checkbox' name='personal' onChange={this.handleFilter} />
                        Персональное
                    </label>
                    <label className={classN}>
                        <input type='checkbox' name='night' onChange={this.handleFilter} />
                        Ночное
                    </label>
                    <label className={classU}>
                        <input type='checkbox' name='urgent' onChange={this.handleFilter} />
                        Срочное
                    </label>
                </div>
                <UserBoard/>
            </div>
        );
    }
}

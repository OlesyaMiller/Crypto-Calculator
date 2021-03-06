import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios';

class PortfolioContainer extends Component {
    state = {
        name: '',
        portfolio: [],
        search_results: [],
        active_currency: null,
        amount: null
    }
    handleChange = (e) => {
        axios.post('http://localhost:3000/search', {
            search: e.target.value
        })
        .then((data) => {
            debugger 
        })
        .catch((data) => {
            debugger 
        })
    };

    render() {
        return (
            <div>
                <Search handleChange={this.handleChange}/>
                <Calculate/>
            </div>
        )
    };
}

export default PortfolioContainer;
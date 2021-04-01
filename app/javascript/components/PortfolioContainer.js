import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';

class PortfolioContainer extends Component {
    state = {
        name: '',
        portfolio: [],
        search_results: [],
        active_currency: null,
        amount: null
    }
    handleChange = (e) => {
        // e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.name)
    }

    render() {
        return (
            <div>
                <Search handleChange={this.handleChange}/>
                <Calculate/>
            </div>
        );
    }
}

export default PortfolioContainer;
import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'

class PortfolioContainer extends Component {
    state = {
        name: '',
        portfolio: [],
        search_results: [],
        active_currency: null,
        amount: null
    }
    handleChange = (e) => {
        //     [e.target.name]: e.target.value
        // })
        axios.post('http://localhost:3000/search', {
            search: e.target.value
        })
        .then((data) => {
            // this.setState({
            //     search_results: [...data.data.currencies]
            // })
            debugger 
        })
        .catch((data) => {
            debugger 
        })
        console.log(this.state.search_results)
    }

    render() {
        return (
            <div>
                <Search handleChange={this.handleChange}/>
                <Calculate/>
            </div>
        )
    }
}

export default PortfolioContainer
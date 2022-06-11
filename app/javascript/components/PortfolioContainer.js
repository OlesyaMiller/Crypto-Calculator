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
        axios.post('http://localhost:3000/search', {
            search: e.target.value
        })
        .then(data => {
            this.setState({
                search_results: [...data.data.currencies]            
            })
        })
        .catch(data => {
            debugger
        })
        console.log(this.state.search_results)
    }

    handleSelect = (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("data-id")
        const activeCurrency = this.state.search_results.filter(curr => curr.id == parseInt(id))[0]
        this.setState({
            active_currency: activeCurrency,
            search_results: []
        })
        console.log(this.state.active_currency)
    }

    render() {
        return (
            <div>
                <Search handleSelect={this.handleSelect} searchResults={this.state.search_results} handleChange={this.handleChange}/>
                <Calculate/>
            </div>
        )
    }
}

export default PortfolioContainer
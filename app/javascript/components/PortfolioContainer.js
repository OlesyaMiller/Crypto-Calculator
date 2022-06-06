import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'

class PortfolioContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        debugger
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
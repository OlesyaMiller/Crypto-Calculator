import React, { Component } from 'react';

class Search extends Component {
    
    render() {
        const searchResults = this.props.searchResults.map(curr => <li key={curr.id} data-id={curr.id} onClick={this.props.handleSelect} className="currency-list-item"><a href="#" data-id={curr.id} className="currency"><strong >{curr.name}</strong> <strong>{curr.currency_symbol}</strong></a></li>)
        return (
            <div>
                <h1>Cryptocurrency Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for a Cryptocurrency:</label><br/>
                        <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Ethereum" value={this.props.name} className="field"/>    
                    </div>    
                </form> 
                <div className="currency-list">
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default Search;
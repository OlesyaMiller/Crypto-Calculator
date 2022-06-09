import React, { Component } from 'react';

class Search extends Component {
    
    render() {
        const searchResults = this.props.searchResults.map(curr => <li key={curr.id} className="currency-list-item"><a class="currency" href="#"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a></li>)
        return (
            <div>
                <h1>Cryptocurrency Portfolio Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>earch for a Cryptocurrency:</label><br/>
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
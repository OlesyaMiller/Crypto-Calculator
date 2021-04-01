import React, { Component } from 'react';

class Search extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <h1>Cryptocurrency Portfolio Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for a Cryptocurrency:</label><br/>
                        <input autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Ethereum" value="" className="field"/>    
                    </div>    
                </form> 
            </div>
        );
    }
}

export default Search;
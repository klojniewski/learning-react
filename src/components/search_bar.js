import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    onInputChange(term) {
        this.setState({
            term
        });
        this.props.onSearchTermChange(term);
    }
    render () {
        return (
            <div>
                <input 
                    value={this.state.term}
                    placeholder="type something" 
                    onChange={event=>this.onInputChange(event.target.value)} />
                <p>{this.state.term}</p>
            </div>
        );
    }
}


export default SearchBar;
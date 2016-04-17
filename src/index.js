import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAnRC5JxMJlWf_NcfecSkCX-fdcqzMsIjw';

const App = () => {
    return (
        <div>
            <h1>ReactApp!</h1>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
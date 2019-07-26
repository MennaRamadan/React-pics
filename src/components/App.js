import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
 

class App  extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {
                Authorization: 'Client-ID b2fdb580836c784bdf51d3801f11471d1c02075a3c1a93dab44652d3617c0df1'
            }
        })
    }

    render(){
        return (<div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar clickMeWhenUserSubmit={this.onSearchSubmit}/>
                </div>);
    }
}

export default App;
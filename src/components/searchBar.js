import React from 'react';

class SearchBar extends React.Component{

    // onInputChange(event){
    //     console.log(event.target.value);
    // };

    state = {term: ""};

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={this.onInputChange}/> */}
                        <input type="text"
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}/>
                        {/* <input type="text" onChange={this.onInputChange()}/> */}
                        {/* if we call it like this, this mean that i will be called while calling render but 
                        it we need it only while changing so without () */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
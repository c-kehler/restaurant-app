import React, { Component } from "react";

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event)
    }

render(){
    return(
        <form className="search"  onSubmit={this.handleInput}>
        <input className='search-bar' type="text" onChange={this.handleChange}/>
        <input className="search-bar"  value='Search' type="submit"></input>
        </form>
    )

}    
 }

 export default Search
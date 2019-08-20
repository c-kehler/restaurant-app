import React, { Component } from "react";

class SearchBar extends Component {    
    constructor(){
        super()
       
    }
    // handleSearch = (event) => {
    //     event.preventDefault();
    //     this.props.handleSearch()
    // }
      handleChange = (event) => {
          event.preventDefault();
          this.props.handleChange(event)
      }

render(){
    return(
        <form className="search" onSubmit={this.props.handleSearch} >
        <input className='search-bar' type="text" onChange={this.handleChange}/>
        <input className="search-bar"  value='Search' type="submit"></input>
        </form>
    )

}    
 }

 export default SearchBar
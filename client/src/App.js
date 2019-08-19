import React, { Component } from "react";
import "./App.css";
import RatingCard from './components/card'
import Search from './components/search'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  

    // handleInput = (event) => {
    //     event.preventDefault();
    //     this.props.updateSearch()
    // }
    
  //   handleChange = (event) => {
  //    this.setState({
  //      input: event.target.value
  //    })
  // }
  render() {
    return <div>
      <RatingCard/>
      {/* <Search handleChange={handleChange} /> */}
    </div>;
  }
}

export default App;

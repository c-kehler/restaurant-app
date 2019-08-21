import React from "react";
import RatingCard from "../components/RatingCard";
import { showFaves } from "../services/apiService";
// import { showFaves } from "../services/apiService"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount(){
    const faves = await showFaves()
    console.log(faves) 
  }
  render() {
    const { user, venues } = this.props;
    let venueToShow;
    if (venues) {
      venueToShow = venues[0].address;
    } else {
      venueToShow = "no venue";
    }

    return (
      <div>
        <h1>{user.name ? `Welcome back ${user.name}` : null}</h1>
        
      </div>
    );
  }
}

export default Dashboard;

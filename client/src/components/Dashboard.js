import React from "react";
import RatingCard from "../components/RatingCard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

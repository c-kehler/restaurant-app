import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Ratings from "./Ratings";
import VenueInfo from "./venueInfo";

class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ratingcard">
          <VenueInfo />
          <Ratings />
      </div>
    );
  }
}

export default RatingCard;

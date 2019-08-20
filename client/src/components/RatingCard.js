import React, { Component } from "react";
import axios from "axios";

class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foursquareData: 0,
      yelpData: 0,
      review: "",
      yelpVenueID: "",
      cardData: []
    };
  }

  render() {
    console.log("card data below");
    console.log(this.props.cardData);
    console.log(this.props.yelpData);
    console.log(this.props.foursquareData);
    return (
      <div className="ratingcard">
        <React.Fragment>
          {this.props.cardData.map(data => (
            <React.Fragment>
              <img src={data.image_url} />
              <div className="ratingandheader">
                <div className="ratingCircle">
                  {(
                    (this.props.yelpData + this.props.foursquareData) /
                    2
                  ).toFixed(1)}
                </div>
                <div>
                  <h1 className="restaurantName">{data.name}</h1>
                  <p className="phone-number">{data.display_phone}</p>
                </div>
              </div>
              <p className="venue-summary">{this.props.review}</p>
              <div className="button-container">
                <button className="link-button">
                  <i class="fas fa-link" />
                </button>
                <button className="like-button">
                  <i class="fas fa-heart" />
                </button>
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      </div>
    );
  }
}

export default RatingCard;

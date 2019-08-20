import React, { Component } from "react";
import axios from "axios";
import { addRestaurant } from "../services/apiService";

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

  handleFavorite = async e => {
    e.preventDefault();
    console.log(this.props.cardData);
    const restObj = {
      name: this.props.cardData[0].name,
      address: this.props.cardData[0].location.address1,
      rating: parseInt(
        ((this.props.yelpData + this.props.foursquareData) / 2).toFixed(1)
      )
    };
    console.log(this.props.userId);
    console.log(restObj);
    await addRestaurant(this.props.userId, restObj);
  };

  render() {
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
            </React.Fragment>
          ))}
          <button onClick={this.handleFavorite}>like</button>
        </React.Fragment>
      </div>
    );
  }
}

export default RatingCard;

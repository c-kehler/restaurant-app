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
      name: this.props.cardData[0].venue.name,
      rating: parseInt(
        ((this.props.yelpData + this.props.foursquareData) / 2).toFixed(1)
      ),
      number: this.props.cardData[0].venue.contact.formattedPhone,
      URL: `${this.props.cardData[0].venue.bestPhoto.prefix}500x500${
        this.props.cardData[0].venue.bestPhoto.suffix
      }`,
      Summary: this.props.cardData[0].venue.tips.groups[0].items[0].text,
      link: this.props.cardData[0].venue.url
    };

    await addRestaurant(this.props.userId, restObj);
  };

  render() {
    return (
      <div className="ratingcard">
        <React.Fragment>
          {this.props.cardData.map(data => (
            <React.Fragment>
              <img
                src={`${data.venue.bestPhoto.prefix}500x500${
                  data.venue.bestPhoto.suffix
                }`}
              />
              <div className="ratingandheader">
                <div className="ratingCircle">
                  {(
                    (this.props.yelpData + this.props.foursquareData) /
                    2
                  ).toFixed(1)}
                </div>
                <div>
                  <h1 className="restaurantName">{data.venue.name}</h1>
                  <p className="phone-number">
                    {data.venue.contact.formattedPhone}
                  </p>
                </div>
              </div>
              <p className="venue-summary">
                "{data.venue.tips.groups[0].items[0].text}"
              </p>
              <div className="button-container">
                <a href={data.venue.url} target="_blank">
                  <button className="link-button">
                    <i class="fas fa-link" />
                  </button>
                </a>
                <button onClick={this.handleFavorite} className="like-button">
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

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
              <img src={`${data.venue.bestPhoto.prefix}500x500${data.venue.bestPhoto.suffix}`}/>
              <div className="ratingandheader">
                <div className="ratingCircle">
                  {(
                    (this.props.yelpData + this.props.foursquareData) /
                    2
                  ).toFixed(1)}
                </div>
                <div>
                  <h1 className="restaurantName">{data.venue.name}</h1>
                  <p className="phone-number">{data.venue.contact.formattedPhone}</p>
                </div>
              </div>
              <p className="venue-summary">"{data.venue.tips.groups[0].items[0].text}"</p>
              <div className="button-container"> 
              <a href = {data.venue.url} target="_blank"><button className="link-button" >
                  <i class="fas fa-link" />
                </button></a>
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

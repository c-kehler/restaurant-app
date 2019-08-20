import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Search from "./search";
import Ratings from "./Ratings";

class VenueInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      input: ""
    };
  }
  async componentDidMount() {
    const URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=mother's ruin&location=new york&limit=1`;

    await axios
      .get(URL, {
        params: {},
        headers: {
          Authorization:
            "Bearer Mfwm2_zb0qrWMcBjiB3Qw6GSIIG38TS-VdjZepk1X9EvQFw9A9fA24dIzoxyi5Xz4YjBnNnOMb0SGWTuzjTLN4lI9ZDZf9_9Mg7tFPyE8mzapp2y8tnEGbvWH6haXXYx"
        }
      })
      .then(res => {
        this.setState({ cardData: res.data.businesses });
        console.log(this.state.cardData);
      });
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.cardData.map(data => (
          <React.Fragment>
            <img src={data.image_url} />
            <div className="ratingandheader">
              <Ratings />
              <div>
                <h1 className="restaurantName">{data.name}</h1>
                <p className="phone-number">{data.display_phone}</p>
              </div>
            </div>
            <p className="venue-summary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default VenueInfo;

import React, { Component } from "react";
import axios from "axios";

class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpData: 0,
      foursquareData: 0
    };
  }

  async componentDidMount() {
    await axios
      .get(
        `https://api.foursquare.com/v2/venues/search?client_id=J0QXDNXQGTX5GLM4PVRZ4RGIDFYUFQCXDXT20RLTGOLEYF3B&client_secret=WWGIIVWEVP3KTINZBGFYXDJ1TEGF4ILVLNF4XOBSCS2SYVZH&v=20190819&near=new york&intent=browse&radius=10000&query=mothers ruin&limit=1`
      )
      .then(res => {
        const venueID = res.data.response.venues[0].id;
        axios
          .get(
            `https://api.foursquare.com/v2/venues/${venueID}?client_id=J0QXDNXQGTX5GLM4PVRZ4RGIDFYUFQCXDXT20RLTGOLEYF3B&client_secret=WWGIIVWEVP3KTINZBGFYXDJ1TEGF4ILVLNF4XOBSCS2SYVZH&v=20190819`
          )
          .then(res => {
            const foursquareData = res.data.response.venue.rating;
            this.setState({ foursquareData: foursquareData });
            console.log(`foursquare: ${foursquareData}`);
          });
      });
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
        const yelpData = parseInt(res.data.businesses[0].rating) * 2;
        console.log(`yelp: ${yelpData}`);
        this.setState({ yelpData: yelpData });
      });
  }
  render() {
    return (
      <div className="ratingCircle">
        {((this.state.yelpData + this.state.foursquareData) / 2).toFixed(1)}
      </div>
    );
  }
}
export default Ratings;

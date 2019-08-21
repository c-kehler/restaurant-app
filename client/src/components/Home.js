import React from "react";
import SearchBar from "./search";
import axios from "axios";
import RatingCard from "./RatingCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      foursquareData: 0,
      yelpData: 0,
      review: "",
      yelpVenueID: "",
      cardData: [],
      restObj: {}
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSearch = async e => {
    e.preventDefault();
    const restObj = {};
    await axios
      .get(

        `https://api.foursquare.com/v2/venues/search?client_id=M035A0FSW0AS3E4PXOP5MLJIVDKX2SZFEJJSK3D3MLAZUXFA&client_secret=1Q40YKC1KVZHT3XMNHJP0UYQYQKYUVYNEIQTOPLSG4DMTRJT&v=20190819&near=new york&intent=browse&radius=10000&query=${
     
          this.state.input
        }&limit=1`
      )
      .then(async res => {
        console.log(res);
        restObj.name = res.data.response.venues[0].name;
        const venueID = res.data.response.venues[0].id;
        console.log("test");

        await axios
          .get(
            `https://api.foursquare.com/v2/venues/${venueID}?client_id=J0QXDNXQGTX5GLM4PVRZ4RGIDFYUFQCXDXT20RLTGOLEYF3B&client_secret=WWGIIVWEVP3KTINZBGFYXDJ1TEGF4ILVLNF4XOBSCS2SYVZH&v=20190819`
          )
          .then(async res => {
            const foursquareData = res.data.response.venue.rating;
            this.setState({ foursquareData: foursquareData });
            await this.setState({ cardData: [res.data.response] });
          });
      });

    const URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${
      this.state.input
    }&location=new york&limit=1`;
    await axios
      .get(URL, {
        params: {},
        headers: {
          Authorization:
            "Bearer Mfwm2_zb0qrWMcBjiB3Qw6GSIIG38TS-VdjZepk1X9EvQFw9A9fA24dIzoxyi5Xz4YjBnNnOMb0SGWTuzjTLN4lI9ZDZf9_9Mg7tFPyE8mzapp2y8tnEGbvWH6haXXYx"
        }
      })
      .then(async res => {
        const yelpData = parseInt(res.data.businesses[0].rating) * 2;
        restObj.yelpRating = res.data.businesses;
        await this.setState({ yelpData: yelpData });
        await this.setState({ yelpVenueID: res.data.businesses[0].id });
      })
      .then(async res => {

        console.log(res);

        await axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${
              this.state.yelpVenueID
            }/reviews`,
            {
              params: {},
              headers: {
                Authorization:
                  "Bearer Mfwm2_zb0qrWMcBjiB3Qw6GSIIG38TS-VdjZepk1X9EvQFw9A9fA24dIzoxyi5Xz4YjBnNnOMb0SGWTuzjTLN4lI9ZDZf9_9Mg7tFPyE8mzapp2y8tnEGbvWH6haXXYx"
              }
            }
          )
          .then(res => {
            const review = res.data.reviews[0].text;
            this.setState({ review: review });
          });
      });
  };

  render() {
    // console.log(this.props)
    const { yelpData, foursquareData, review, cardData } = this.state;
    // const imgURL = this.state.cardData[0]
    return (

      <React.Fragment>

        <SearchBar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />

        <RatingCard
          yelpData={yelpData}
          foursquareData={foursquareData}
          review={review}
          cardData={cardData}

     
          userId={this.props.user.id}
          />
      </React.Fragment>

    );
  }
}

export default Home;

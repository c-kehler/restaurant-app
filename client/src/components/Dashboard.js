import React from "react";
import { showFaves } from "../services/apiService";
import { unFavorite } from "../services/apiService";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: [],
      faveIds: []
    };
  }

  async componentDidMount() {
    await this.getFavs();
  }
  getFavs = async () => {
    const faves = await showFaves();
    const faveIds = faves.map(fave => fave.id);
    this.setState({ faves, faveIds });
  };

  handleFave = async id => {
    console.log(id);
    const { faves } = this.state;
    return faves.filter(async fave => {
      if (fave.id === id) {
        faves.splice(faves.indexOf(fave.id), 1);
        this.setState({ faves });
        await unFavorite(id);
      }
    });
  };

  renderFaves = () => {
    console.log(this.props.user);

    if (this.state.faves.length) {
      return this.state.faves.map(faves => {
        const { name, URL, number, rating, Summary, link, id } = faves;
        return (
          <div className="ratingcard" key={id}>
            <React.Fragment>
              <img src={URL} />
              <div className="ratingandheader">
                <div className="ratingCircle">{rating}</div>
                <div>
                  <h1 className="restaurantName">{name}</h1>
                  <p className="phone-number">{number}</p>
                </div>
              </div>
              <p className="venue-summary">"{Summary}"</p>
              <div className="button-container">
                <a href={link} target="_blank">
                  <button className="link-button">
                    <i class="fas fa-link" />
                  </button>
                </a>
                <button
                  onClick={() => this.handleFave(id)}
                  className="like-button"
                  name={id}
                >
                  X
                </button>
              </div>
            </React.Fragment>
          </div>
        );
      });
    }
  };
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>{user.name ? `${user.name} Favorites` : null}</h1>
        <div>{this.props.user ? this.renderFaves() : false}</div>
      </div>
    );
  }
}

export default Dashboard;

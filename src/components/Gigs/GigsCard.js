import React, { Component } from 'react';
import './Gigs.css'
import { Link } from "react-router-dom";

class GigsCard extends Component {
  render() {
    return (
      <div className="card">
          {this.props.gig.gig} {this.props.gig.date} {this.props.gig.rating}
          <picture>
            <img src={require('./charlieChaplin.png')} alt="Chaplin" />
          </picture>
          <button type="button" onClick={() => this.props.deleteGig(this.props.gig.id)}>Delete Gig</button>
          <button type="button" onClick={() => {this.props.history.push(`/gigs/${this.props.gig.id}/edit`)}}>Edit</button>
          </div>
    );
  }
}

export default GigsCard;
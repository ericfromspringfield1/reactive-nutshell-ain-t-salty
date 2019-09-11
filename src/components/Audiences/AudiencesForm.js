import React, { Component } from "react";
import AudiencesManager from '../../modules/AudiencesManager';
// import './AudiencesForm.css'

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true
    });
  }

  render() {
    return (
      <div>
        <button>Show menu</button>

        {this.state.showMenu ? (
          <div className="menu">
            <button> 🎤🎤🎤🎤🎤 </button>
            <button> 🎤🎤🎤🎤</button>
            <button> 🎤🎤🎤 </button>
            <button> 🎤🎤 </button>
            <button> 🎤 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AudiencesForm

import React, { Component } from "react";
import GigsManager from "../../modules/GigsManager";
import "./GigsForm.css";

class GigsForm extends Component {
  state = {
    gig: "",
    date: "",
    rating: 0,
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create gig object, invoke the GigsManager post method, and redirect to the full gig list
   */
  constructNewGig = evt => {
    evt.preventDefault();
    if (
      this.state.gig === "" ||
      this.state.date === "" ||
      this.state.rating === ""
    ) {
      window.alert("Please input a gig and date");
    } else {
      this.setState({ loadingStatus: true });
      const gig = {
        gig: this.state.gig,
        date: this.state.date,
        rating: this.state.rating,
        userId: parseInt(sessionStorage.getItem("credentials"))
      };

      // Create the gig and redirect user to gig list
      GigsManager.post(gig).then(() => this.props.history.push("/gigs"));
    }
  };

  constructor() {
    super();

    this.state.rating = {
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
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="gig"
                placeholder="Gig"
              />
              <label htmlFor="gig">Gig</label>

              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date"
              />
              <label htmlFor="date">Date</label>

              <div>
                <button>Rate The Set</button>

                {this.state.showMenu ? (
                  <div className="rating">
                    <button> 🎤🎤🎤🎤🎤 </button>
                    <button> 🎤🎤🎤🎤</button>
                    <button> 🎤🎤🎤 </button>
                    <button> 🎤🎤 </button>
                    <button> 🎤 </button>
                  </div>
                ) : null}
              </div>
              );
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewGig}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default GigsForm;

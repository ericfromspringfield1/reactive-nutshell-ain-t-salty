import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";

import Login from './Authentication/Login'
import Welcome from "./Authentication/Welcome";
import Registration from "./Authentication/Registration";
import GigsList from "./Gigs/GigsList"
import GigsDetail from "./Gigs/GigsDetail"
import GigsForm from "./Gigs/GigsForm"
import GigsEditForm from "./Gigs/GigsEditForm"
import AudiencesForm from "./Audiences/AudiencesForm"

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
         
        <Route exact path="/gigs" render={props => {
          if (this.isAuthenticated()) {
            return <GigsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
        />

        <Route exact path="/gigs/:gigId(\d+)" render={props => {
          // Pass the gigId to the GigsDetail Component
          return <GigsDetail gigId={parseInt(props.match.params.gigId)} {...props} />
        }} />

        {/* Our shiny new route. */}
        <Route path="/gigs/new" render={(props) => {
          return <GigsForm {...props} />
        }} />

        <Route
          exact path="/gigs/:gigId(\d+)/edit" render={props => {
            return <GigsEditForm {...props} />
          }}
        />

        <Route path="/audiences/new" render={(props) => {
          return <AudiencesForm {...props} />
        }} />
      </React.Fragment>
    );
  }
}
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"   
import './NavBar.css'


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gigs">Gigs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">Venues</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/audiences">Audiences</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar

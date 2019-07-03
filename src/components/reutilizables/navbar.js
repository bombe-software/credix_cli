import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-light is-bold" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to={`/`}><img src='../../img/logo.png' width="170px" alt="logo" /></Link>
                </div>
                <Link to="/test" className="navbar-item" onClick={this.handleClick}>
                  Test de credito&nbsp;&nbsp;
                  <span className="icon has-text-info">
                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                  </span>
                </Link>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-primary" to="/login">Logueate!</Link>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-danger" to="/validacion">Registrate!</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;
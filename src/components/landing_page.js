import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from "react-router-dom";

//queries
import nullname from './../queries/nullname';

class LandingPage extends Component {

  render() {
    if (this.props.data.loading) { return (<div>Loading...</div>); }
    console.log(this.props.data.nullnames);
    return (
      <div>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item">LOGO CREDIX</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link className="button is-danger" to="/validacion">Registrate!</Link>
              </div>
            </div>
          </div>
        </nav>
        <section class="hero is-medium is-warning is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Credix
              </h1>
              <h2 class="subtitle">
                ¿Eres digno de un crédito?
              </h2>
            </div>
          </div>
          <img class="imagen degradado" src="img/prestamo.jpg"></img>
        </section>
      </div>
    );
  }
}

export default graphql(nullname)(LandingPage);

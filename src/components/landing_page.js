import React, { Component } from 'react';
import { graphql } from 'react-apollo';


//queries
import nullname from './../queries/nullname';

class LandingPage extends Component {

  render() {
    if (this.props.data.loading) { return (<div>Loading...</div>); }
    console.log(this.props.data.nullnames);
    return (
      <div>
        <nav className="navbar is-light is-bold" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <span className="navbar-item">LOGO CREDIX</span>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <span className="button is-success">Registrate!</span>
              </div>
            </div>
          </div>
        </nav>
        <section className="hero is-medium is-primary is-bold has-background">
          <img src="img/prestamo.jpg" className="hero-background is-transparent"></img>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Credix
              </h1>
              <h2 className="subtitle">
                ¿Su cliente es digno de un crédito?
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box notification is-primary">
                <p className="title">Usamos IA</p>
                <p className="subtitle"></p>
                <div className="content">
                  Con la ayuda de nuesta IA podemos detectar
                  patrones faciales que puedan permitir la detección de su estado al contestar nuestro test.
                </div>
                <figure class="image container imagen ">
                  <img src="img/joven.png"></img>
                </figure>
              </div>
              </div>
              <div className="tile is-child box notification is-info">
                <p className="title">Otorga créditos</p>
                <p className="subtitle"></p>
                <div className="content">
                  Nuestro test le ayudara a saber si sus clientes son aptos para recibir un crédito y con ello
                  llevar un registro de ellos para tener un mejor control.
                </div>
                <figure class="image container imagen2">
                  <img src="img/solicita-credito.png"></img>
                </figure>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box notification is-primary">
                  <p className="title center">Somos una alternativa</p>
                  <div className="content">
                  Buscamos ser una opción para que la decisión de otorgar un crédito a una persona sea
                  más sencilla de tomar.
                </div>
                <figure class="image container imagen3">
                  <img src="img/decision.jpg"></img>
                </figure>
                </div>
              </div>
            </div>
        </section>
      </div>
        );
      }
    }
    
    export default graphql(nullname)(LandingPage);
